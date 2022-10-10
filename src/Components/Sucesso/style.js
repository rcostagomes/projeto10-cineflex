import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  h1 {
    font-size: 24px;
    font-weight: 400;
    font-family: "Roboto";
    font-style: normal;
    color: #247a6b;
  }
`;
export const Main = styled.div`
width: 100%;
margin-left: 10px;

h1{
margin-left:10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #293845;
margin-bottom: 10px;
}

h2{
margin-left: 10px;
margin-bottom: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
}
`

export const Inicio = styled.button`
cursor: pointer;
margin-top: 70px;
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
color: white;
`