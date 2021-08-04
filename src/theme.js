import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
};

export const darkTheme = {
  body: "#000",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;