import React from "react";
import { faker } from "@faker-js/faker";
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
	AbsoluteTag,
	WrapperLower,
	TodoAvatar,
} from "./Style.tsx";

type TodoProps = {
	todo: TodoItem;
};

type TodoItem = {
	id: number;
	completed: boolean;
};

const Todo: React.FC<TodoProps> = ({ todo }) => {
	const randomDescription = faker.lorem.sentence();

	return (
		<TodoContainer>
			<TodoBackground>
				<WrapperUpper>
					<TodoCheckbox type="checkbox" defaultChecked={todo.completed} />
					<TodoTitle>
						For the sacke of example we are a building company and we have just
						closed
					</TodoTitle>
				</WrapperUpper>
				<WrapperTimes>
					<TodoTime>Oct 12, 01:00 PM</TodoTime>
					<TodoTime>Oct 01, 02:00 PM</TodoTime>
				</WrapperTimes>
				<TodoDescription>{randomDescription}</TodoDescription>
				<WrapperLower>
					<WrapperTags>
						<TodoTag backgroundColor="#B233A6" textColor="#fff">
							Entity title
						</TodoTag>
						<TodoTag backgroundColor="#EBEEF6" textColor="#616C82">
							Front-end
							<AbsoluteTag>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="11"
									height="20"
									viewBox="0 0 11 20"
									fill="none"
								>
									<path
										d="M0 0H2.0775C3.29264 0 4.44189 0.552359 5.20098 1.50122L10.001 7.50122C11.1697 8.96209 11.1697 11.0379 10.001 12.4988L5.20098 18.4988C4.44189 19.4476 3.29264 20 2.0775 20H0V0Z"
										fill="#EBEEF6"
									/>
								</svg>
							</AbsoluteTag>
						</TodoTag>
					</WrapperTags>
					<TodoAvatar src="/avatar.png" alt="avatar" />
				</WrapperLower>
			</TodoBackground>
		</TodoContainer>
	);
};

export default Todo;
