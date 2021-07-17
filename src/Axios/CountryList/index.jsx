
import React from 'react'
import { Container, Title, Wrapper } from './style'

const List = (props) => {
    return (
        <Container>
            {props.data.map(({ name, capital }, index) => {
                return (
                    <Wrapper>
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