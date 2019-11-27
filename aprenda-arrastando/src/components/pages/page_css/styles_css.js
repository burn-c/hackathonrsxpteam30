import styled, {css} from 'styled-components';

export const Reference = styled.div`
  background-color: black;
  color: white;
  font-family: "Arial";
  text-align: center;
`;

export const Exercise = styled.div`
  background-color: ${props => (props.style1 ? "black" : "none")};
  color: ${props => (props.style2 && "gray" )};
  font-family: ${props => (props.style3 ? "Arial" : "Times")};
  text-align: ${props => (props.style4 ? "center" : "left")};
  font-style: ${props => (props.style5 ? "italic" : "normal")};
  text-transform: ${props => (props.style6 ? "uppercase" : "none")};

  box-shadow: ${({ shadowStyle1 }) => ( shadowStyle1 && '0px 0px 15px 0px #888888' )};
  color: gray;

  /* ALTERAR COM ESSA PROPRIEDADES */
  /* margin: ${({ margin }) => (margin && '10px')};
  padding: ${({ padding }) => (padding && '20px')};
  border-radius: ${({ borderRadius }) => ( borderRadius && '5px')} ;
  width: ${({ width }) => (width && '40%')};
  height: ${({ height }) => (height && '35vh')}; */
`;

export const Options = styled.div`
  button.teste {
    ${props => props.style1 && css`
      color: green;
    `}
  }
`;

export const StyledDiv = styled.div`
margin: ${({ margin }) => (margin && '10px')};
padding: ${({ padding }) => (padding && '20px')};
box-shadow: ${({ shadow }) => ( shadow && '0px 0px 15px 0px #888888' )};
border-radius: ${({ borderRadius }) => ( borderRadius && '5px')} ;
color: gray;
width: ${({ width }) => (width && '40%')};
height: ${({ height }) => (height && '35vh')};
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