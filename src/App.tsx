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
    src: url('/fonts/segoe-ui-bold.woff') format('woff'),
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
