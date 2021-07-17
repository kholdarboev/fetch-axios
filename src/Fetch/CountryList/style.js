import styled from "styled-components";
export const Container = styled.div`
max-height: 80vh;
scroll-behavior: smooth;
overflow-y: scroll;
::-webkit-scrollbar{
    width: 1em;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px orange;
}
::-webkit-scrollbar-thumb {
  background-color: #444;
  outline: 1px solid #777;
}
`

export const Title = styled.div`
padding: 5px 10px;
font-size: 20px;
width: 200px;
`
export const Wrapper = styled.div`
width: 100%;
display: flex;
padding:0 10px;
`