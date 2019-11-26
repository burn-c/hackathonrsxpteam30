import styled from 'styled-components';
import { colors } from '../../theme';

const Button = styled.button`
  font-family: Arial;
  text-align: center;
  opacity: ${({ opacity }) => (opacity && '0.6')};
  cursor: ${({ notCursor }) => (notCursor ? 'not-allowed' : 'pointer')};
  border: solid 2px ${colors.primary};
  padding: 8px 30px;
  font-size: ${props => (props.font ? '1.8rem' : '2.0rem')};
  width: ${props => (props.width ? '360px' : null)};
  margin: ${props => (props.margin && '5px 20px')};
  margin-left: ${props => (props.marginLeft ? '40px' : null)};
  border-radius: ${props => (props.removeAccess ? '5px' : '25px')};
  border-radius: ${props => (props.borderRadius ? '10px' : '25px')};
  background-color: ${props => (props.bg ? `${colors.primary}` : `${colors.secondary}`)};
  color: ${props => (props.color ? `${colors.secondary}` : `${colors.primary}`)};
`;

export default Button;