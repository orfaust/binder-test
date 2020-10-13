import React from 'react'
import styled from 'styled-components'

const types = {
  default: `
    background: #ddd;
    color: #666;
    &:hover {
      background: #ccc;
    }
  `,
  primary: `
    background: #88f;
    color: #004;
    &:hover {
      background: #66f;
    }
  `,
  info: `
    background: #f8f;
    color: #404;
    &:hover {
      background: #f6f;
    }
  `,
  success: `
    background: #8f8;
    color: #040;
    &:hover {
      background: #6f6;
    }
  `,
  danger: `
    background: #f88;
    color: #400;
    &:hover {
      background: #f66;
    }
  `,
}

const sizes = {
  small: `
    padding: 7px 20px;
    font-size: 0.8em;
  `,
  normal: `
    padding: 12px 24px;
    font-size: 1em;
  `,
  large: `
    padding: 18px 36px;
    font-size: 1.2em;
  `,
}

const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;

  ${props => (
    props.type ? types[props.type] : types.default
  )};

  ${props => (
    props.size ? sizes[props.size] : sizes.normal
  )};
`

export default function(props) {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}
