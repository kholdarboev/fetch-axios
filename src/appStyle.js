import styled from 'styled-components';


export const Container = styled.div`
padding: 50px;
background-color: #333;
height: 100vh;
box-sizing: border-box;
display: flex;
width:100%;
justify-content: space-between;
align-items: flex-start;
@media(max-width:800px){
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}
`