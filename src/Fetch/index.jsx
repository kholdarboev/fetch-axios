import React, { useCallback, useState } from 'react';
import CountryList from './CountryList'
import { Button, Container, Img, Wrapper } from './style';
const Fetch = (props) => {

    const [incomingData, setIncomingData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, SetError] = useState(null);
    // //*without async. it is working *//
    // const getFetch = () => {
    //    fetch('https://restcountries.eu/rest/v2/all')
    //    .then((res)=>res.json())
    //    .then((res)=>setData(res))
    //    .catch((err)=>err)
    // }
    //*with async. much cleaner and easier *//
    const getFetch = useCallback(async () => {
        setIsLoading(true)
        SetError(null)
        try {

            const response = await fetch('https://restcountries.eu/rest/v2/all')
            if (!response.ok) {
                throw new Error('something went wrong!')
            }
            const data = await response.json();
            setIncomingData(data)
        }
        catch (error) {
            SetError(error.message)
        }
        setIsLoading(false);
    }, []);

    // let content = <p>Click to see Country List</p>
    let content = 'Click button to see list'
    if (error) {
        content = <Img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="error" />;
    }
    if (incomingData.length > 0 && !isLoading) {
        content = <CountryList data={incomingData} />;
    }

    if (isLoading) {
        content = <Img.Error src="https://apps.broadway.bank/app/images/loading.gif" alt="loading" />;
    }



    return (
        <Container>
            <Button type='primary' onClick={getFetch}>Fetch Data</Button>
            <Wrapper>
                {content}
            </Wrapper>
        </Container>
    )
}

export default Fetch;