import styled from "styled-components";

export const TodoListContainer = styled.div`
	padding: 20px 0;
	width: min-content;
	height: 100vh;
	overflow-y: scroll;
	margin: 0 auto;
`;

export const WrapperUpper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 4px 8px 0;
`;

export const TodoListDay = styled.h2`
	font-size: 14px;
	font-weight: 600;
	line-height: 140%;
	color: #50b810;
`;

export const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const AddTodoButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 4px;
	background-color: #d9d9d9;
	cursor: pointer;
`;

export const TypeTask = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 4px;
	border: 1.5px solid#7b8aab;
	font-size: 12px;
	font-weight: 600;
	line-height: 140%;
	color: var(--neuteral-black-primary, #555);
`;

export const TodoItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
