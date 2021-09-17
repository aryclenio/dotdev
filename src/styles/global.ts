import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::after,
*::before {
box-sizing: border-box;  
}
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;    
  padding: 0;    
  font-family: sans-serif;    
  transition: all 0.25s linear;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

:root {
  --white: #ffffff;
  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-600: #3b3b3b;
  --gray-700: #282829;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;

  --cyan-500: #FF725E;
  --yellow-500: #FF725E;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 728px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
select,
button {
  font-family: 400, 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
