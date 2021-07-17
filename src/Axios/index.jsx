import React, { useState } from 'react'
import axios from 'axios'
import { Button, Container, Img, Wrapper } from './style';

const Axios = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    async function fetchData() {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            setData(response)
        }
        catch (error) {
            setError(error)
        }
        setIsLoading(false)
    }
    return (
        <Container>
            <Button onClick={fetchData}>Fetch Data</Button>
            <Wrapper>
                {/* {content} */}
                {data.length > 0 && <div>{data.response.map((value) => { return (<div>{value.name}</div>) })}</div>}
                {error && <img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="error" />}
            </Wrapper>
        </Container>
    )
}

export default Axios
