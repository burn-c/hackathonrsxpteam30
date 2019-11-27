import styled from 'styled-components';
import Button from '../../atoms/button';

export const Reference = styled.div`
  background-color: black;
  color: white;
  font-family: "Arial";
  text-align: left;
`;

export const Exercise = styled.div`

font-family: 'time';
/*   text-align: ${props => (props.style4 ? "center" : "left")};
  font-style: ${props => (props.style5 ? "italic" : "normal")};
  text-transform: ${props => (props.style6 ? "uppercase" : "none")}; */

  

  /* ALTERAR COM ESSA PROPRIEDADES */
  box-shadow: ${({ shadowStyle1 }) => ( shadowStyle1 && '0px 0px 15px 0px #888888' )};
  background-color: ${({ shadowStyle1 }) => (shadowStyle1 && 'black')}; /* ${shadowStyle1 => (shadowStyle1 ? "" : "black")};  */
  margin: ${({ shadowStyle1 }) => (shadowStyle1 && '10px')};
  padding: ${({ shadowStyle1 }) => (shadowStyle1 && '20px')};
  border-radius: ${({ shadowStyle1 }) => ( shadowStyle1 && '5px')} ;
  width: ${({ shadowStyle1 }) => (shadowStyle1 && '40%')};
  height: ${({ shadowStyle1 }) => (shadowStyle1 && '35vh')}; 


  color: ${({ colorStyle2 }) => (colorStyle2 && '#fff')}; 


  font-family: ${({ fontStyle3 }) => (fontStyle3 && 'Arial')};

  text-align: ${({ fontAlignStyle4 }) => (fontAlignStyle4 && 'center')}; /* ${props => (props.style4 ? "center" : "left")}; */
  
  font-style: ${({ fontStyleStyle5 }) => (fontStyleStyle5 && 'normal')};  /* ${props => (props.style5 ? "italic" : "normal")}; */




`;

export const Options = styled.div`
  button {
    font-size: 14px;
  }
`;

export const Btn1 = styled(Button)`
  background-color: ${props => (props.shadowStyle1 ? "green" : "default")};
  color: ${props => (props.shadowStyle1 ? "white" : "default")};
`;

export const Btn2 = styled(Button)`
  background-color: ${props => (props.colorStyle2 ? "green" : "default")};
  color: ${props => (props.colorStyle2 ? "white" : "default")};
`;

export const Btn3 = styled(Button)`
  background-color: ${props => (props.fontStyle3 ? "green" : "default")};
  color: ${props => (props.fontStyle3 ? "white" : "default")};
`;

export const Btn4 = styled(Button)`
  background-color: ${props => (props.fontAlignStyle4 ? "green" : "default")};
  color: ${props => (props.fontAlignStyle4 ? "white" : "default")};
  /* background-color: ${fontAlignStyle4 => (fontAlignStyle4 ? "green" : "default")};
  color: ${fontAlignStyle4 => (fontAlignStyle4 ? "white" : "default")}; */
`;

export const Btn5 = styled(Button)`
  background-color: ${props => (props.style5 ? "red" : "default")};
  color: ${props => (props.style5 ? "white" : "default")};
`;

export const Btn6 = styled(Button)`
  background-color: ${props => (props.style6 ? "red" : "default")};
  color: ${props => (props.style6 ? "white" : "default")};
`;

export const StyledDiv = styled.div`
margin: ${({ margin }) => (margin && '10px')};
padding: ${({ padding }) => (padding && '20px')};
box-shadow: ${({ shadow }) => ( shadow && '0px 0px 15px 0px #888888' )};
border-radius: ${({ borderRadius }) => ( borderRadius && '5px')} ;
color: white;
width: ${({ width }) => (width && '40%')};
height: ${({ height }) => (height && '35vh')};
background-color:#000;
text-align: center;
  `;

export const StyledSection = styled.section`
width: 90%;
height: 50vh;
display: flex;
border-color: #fff;
border-style: solid;
justify-content: space-around;
align-items: center;
background-color: #fff;
flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-around;
`; 

export const Footer = styled.footer`
  padding: 40px 0 0 10px;
`;


