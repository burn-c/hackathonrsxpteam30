import styled from 'styled-components';
import Button from '../atoms/button';

export const Container = styled.div`
  
`;

export const Reference = styled.div`
  background-color: black;
  color: white;
  font-family: "Arial";
  text-align: center;
`;

export const Exercise = styled.div`
  background-color: ${props => (props.style1 ? "black" : "none")};
  color: ${props => (props.style2 ? "white" : "black")};
  font-family: ${props => (props.style3 ? "Arial" : "Times")};
  text-align: ${props => (props.style4 ? "center" : "left")};
  font-style: ${props => (props.style5 ? "italic" : "normal")};
  text-transform: ${props => (props.style6 ? "uppercase" : "none")};
`;

export const Options = styled.div`
  button {
    font-size: 14px;
  }
`;

export const Btn1 = styled(Button)`
  background-color: ${props => (props.style1 ? "green" : "default")};
  color: ${props => (props.style1 ? "white" : "default")};
`;

export const Btn2 = styled(Button)`
  background-color: ${props => (props.style2 ? "green" : "default")};
  color: ${props => (props.style2 ? "white" : "default")};
`;

export const Btn3 = styled(Button)`
  background-color: ${props => (props.style3 ? "green" : "default")};
  color: ${props => (props.style3 ? "white" : "default")};
`;

export const Btn4 = styled(Button)`
  background-color: ${props => (props.style4 ? "green" : "default")};
  color: ${props => (props.style4 ? "white" : "default")};
`;

export const Btn5 = styled(Button)`
  background-color: ${props => (props.style5 ? "red" : "default")};
  color: ${props => (props.style5 ? "white" : "default")};
`;

export const Btn6 = styled(Button)`
  background-color: ${props => (props.style6 ? "red" : "default")};
  color: ${props => (props.style6 ? "white" : "default")};
`;
