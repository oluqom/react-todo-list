import React from "react";
import {
	TodoContainer,
	TodoBackground,
	WrapperUpper,
	TodoCheckbox,
	TodoTitle,
	WrapperTimes,
	TodoTime,
	TodoDescription,
	WrapperTags,
	TodoTag,
	WrapperLower,
	TodoAvatar,
} from "./Style.tsx";

type TodoProps = {
	todo: TodoItem;
};

type TodoItem = {
	id: number;
	title: string;
	completed: boolean;
};

const Todo: React.FC<TodoProps> = ({ todo }) => {
	return (
		<TodoContainer>
			<TodoBackground>
				<WrapperUpper>
					<TodoCheckbox type="checkbox" checked={todo.completed} />
					<TodoTitle>{todo.title}</TodoTitle>
				</WrapperUpper>
				<WrapperTimes>
					<TodoTime>Oct 12, 01:00 PM</TodoTime>
					<TodoTime>Oct 01, 02:00 PM</TodoTime>
				</WrapperTimes>
				<TodoDescription>
					Task description with long long long te
				</TodoDescription>
				<WrapperLower>
					<WrapperTags>
						<TodoTag backgroundColor="#B233A6" textColor="#fff">
							Entity title
						</TodoTag>
						<TodoTag backgroundColor="#EBEEF6" textColor="#616C82">
							Front-end
						</TodoTag>
					</WrapperTags>
					<TodoAvatar src="/avatar.png" alt="avatar" />
				</WrapperLower>
			</TodoBackground>
		</TodoContainer>
	);
};

export default Todo;
