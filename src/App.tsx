import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoList from "./components/TodoList/TodoList";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/segoe-ui.woff') format('woff'),
  }

	@font-face {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/segoe-ui-semibold.woff') format('woff'),
  }

	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	button {
		border: 0;
	}

  body {
    font-family: 'Segoe UI', Arial, sans-serif;
  }
`;

const App: React.FC = () => {
	return (
		<>
			<GlobalStyles />
			<TodoList />
		</>
	);
};

export default App;
