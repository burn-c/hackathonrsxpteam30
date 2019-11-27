import styled, {css} from 'styled-components';

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
  button.teste {
    ${props => props.style1 && css`
      color: green;
    `}
  }
`;
