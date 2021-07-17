import styled from "styled-components";
export const Container = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media(max-width:800px){
    width: 100%;
}

`
export const Wrapper = styled.div`
color: #fff;
font-weight: 600;
margin-top: 30px;


` 
export const Button = styled.button`
padding:15px 40px;
font-weight: 600;
border-radius: 3px;
border: none;
opacity: .8;
cursor: pointer;
:hover{
    opacity: 1;
}
:active{
    transform: scale(1.05);
}
`
export const Img = styled.img`
width: 100%;

`
Img.Error = styled(Img)`
width: 200px;
height: 100px;
`