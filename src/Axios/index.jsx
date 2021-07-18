import React, { useState } from 'react'
import axios from 'axios'
import CountryList from './CountryList'
import { Button, Container, Img, Wrapper } from './style';

const Axios = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    async function fetchData() {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            console.log(data);
            setData(response.data)
        }
        catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }


    let content = 'Click button to see list'

    if (error) {
        content = <Img src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png' />
    }
    if (data.length > 0 && !isLoading) {
        content = <CountryList data={data} />;
    }
    if (isLoading) {
        content = <Img.Error src="https://apps.broadway.bank/app/images/loading.gif" alt="loading" />;
    }
    return (
        <Container>
            <Button onClick={fetchData}>Fetch Data with Axios</Button>
            <Wrapper>
                {content}
            </Wrapper>
        </Container>
    )
}

export default Axios
