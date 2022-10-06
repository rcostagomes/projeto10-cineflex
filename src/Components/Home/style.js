import styled from "styled-components";

export const Header = styled.div`


width: 100%;
height: 67px;
background: #C3CFD9;
display: flex;
align-items: center;
justify-content: center;
h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
color: #E8833A;
}
`


export const Title = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 15px;
h1{
font-size:24px;
font-weight: 400;
font-family: 'Roboto';
font-style: normal;
}

`

export const Filmes = styled.div`
width: 100%;

div{
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;
}
img { 
margin: 5px 5px;    
width: 129px;
height: 193px;
border: 8px solid white
}

`
