import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
	TodoListContainer,
	WrapperUpper,
	TodoListDay,
	WrapperButtons,
	AddTodoButton,
	TypeTask,
	TodoItems,
} from "./Style.tsx";

import Todo from "../Todo/Todo.tsx";

type TodoItem = {
	id: number;
	title: string;
	completed: boolean;
};

const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<TodoItem[]>([]);
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await axios.get(
					`https://jsonplaceholder.typicode.com/todos?_page=${page}`,
				);
				setTodos((prevTodos) => [...prevTodos, ...response.data]);
				setLoading(false);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchData();
	}, [page]);

	useEffect(() => {
		if (loading) return;

		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setPage((prevPage) => prevPage + 1);
			}
		});

		const element = document.querySelector("#observer") as Element;

		if (observer.current) {
			observer.current.observe(element);
		}

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [loading]);

	return (
		<>
			<TodoListContainer>
				<WrapperUpper>
					<TodoListDay>Today</TodoListDay>
					<WrapperButtons>
						<AddTodoButton>
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.00065 11.9486C5.73465 11.9486 5.51017 11.8571 5.32719 11.6741C5.14422 11.4911 5.05273 11.2667 5.05273 11.0007V6.94857H1.00065C0.734651 6.94857 0.510165 6.85708 0.327193 6.67411C0.14422 6.49114 0.0527344 6.26665 0.0527344 6.00065C0.0527344 5.73465 0.14422 5.51017 0.327193 5.32719C0.510165 5.14422 0.734651 5.05273 1.00065 5.05273H5.05273V1.00065C5.05273 0.734651 5.14422 0.510165 5.32719 0.327193C5.51017 0.144221 5.73465 0.0527344 6.00065 0.0527344C6.26665 0.0527344 6.49114 0.144221 6.67411 0.327193C6.85708 0.510165 6.94857 0.734651 6.94857 1.00065V5.05273H11.0007C11.2667 5.05273 11.4911 5.14422 11.6741 5.32719C11.8571 5.51017 11.9486 5.73465 11.9486 6.00065C11.9486 6.26665 11.8571 6.49114 11.6741 6.67411C11.4911 6.85708 11.2667 6.94857 11.0007 6.94857H6.94857V11.0007C6.94857 11.2667 6.85708 11.4911 6.67411 11.6741C6.49114 11.8571 6.26665 11.9486 6.00065 11.9486Z"
									fill="#3D8FEC"
								/>
							</svg>
						</AddTodoButton>
						<TypeTask>2</TypeTask>
					</WrapperButtons>
				</WrapperUpper>
				<TodoItems>
					{todos.map((todo: TodoItem, index: number) => (
						<Todo key={`${todo.id}-${index}`} todo={todo} />
					))}
					<div id="observer" style={{ height: "10px" }}></div>
				</TodoItems>
			</TodoListContainer>
		</>
	);
};

export default TodoList;
