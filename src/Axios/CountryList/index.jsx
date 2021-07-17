
import React from 'react'
import { Container, Title, Wrapper } from './style'

const List = ({ data }) => {
    return (
        <Container>
            {data.map(({ name, capital, id }, index) => {
                return (
                    <Wrapper key={index}>
                        <Title style={{ width: '100px' }}>
                            {index + 1}
                        </Title>
                        <Title>
                            {name}
                        </Title>
                        <Title>
                            {capital}
                        </Title>
                    </Wrapper>
                )
            })}
        </Container>
    )
}

export default List