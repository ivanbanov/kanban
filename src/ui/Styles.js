import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export const colors = {
  blue: '#3af',
  red: '#f30',
  white: '#fff',
  lightGrey: '#f5f5f5',
  grey: '#ccc',
  darkGrey: '#777',
  black: '#000',
}

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
  }

  #root {
    height: 100vh;
  }

  input {
    padding: 0.25rem 0.5rem;
    outline: none;
    border: 1px solid ${colors.grey};

    &:focus {
      border-color: ${colors.darkGrey};
    }
  }

  svg {
    width: 1em;
    height: 1em;
    display: inline-flex;
  }
`
