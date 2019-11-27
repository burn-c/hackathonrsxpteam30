import styled from 'styled-components';

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
flex-direction: row;
`;

export const Column = styled.div`
flex-direction: column;
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

export const Label = styled.label`
  font-size: 20px;
  padding: 0 10px 0 0;
`;

export const Footer = styled.footer`
  padding: 40px 0 0 10px;
`;