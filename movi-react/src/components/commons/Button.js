import React from 'react';
// css import
import styled,{css} from 'styled-components';

// button styling
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  
  background: skyblue;
  &:hover {
    background: gray};
  }
  /* fullWidth props =ture */
  ${props =>
  props.fullWidth &&
  css`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
  `
  }
   /* fullWidth cyan =true */
  ${
    props =>
    props.cyan &&
    css`
    background: cyan;
    &:hover{
      background: cyan};
    }
    `

  }
`;
// Button 에 받아오는 props 를 모두 styledButton 에 전달한다는 의미
const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;