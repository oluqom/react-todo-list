import styled from "styled-components";

export const TodoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 4px;
	width: 263px;
	border-radius: 7px;
	background: #f4f8ff;
`;

export const TodoBackground = styled.div`
	padding: 10px;
	width: 255px;
	border-radius: 7px;
	background: var(--neuteral-white, #fff);
	box-shadow:
		0px 1px 2px 0px #d0daeb,
		0px 0px 2px 0px #eef4fe;
`;

export const WrapperUpper = styled.div`
	position: relative;
	display: flex;
	gap: 8px;
	margin: 0 0 8px 0;
`;

export const TodoCheckbox = styled.input`
	position: absolute;
	top: 2px;
	right: 0;
	bottom: 0;
	left: 0;
	width: 16px;
	height: 16px;
	border-radius: 4px;
	border: 1px solid var(--primary-gray-secondary, #aab7d4);
	background: var(--neuteral-gray-background, #f8fafb);
`;

export const TodoTitle = styled.h3`
	display: -webkit-box;
	text-indent: 22px;
	font-size: 14px;
	font-weight: 600;
	line-height: 130%;
	color: var(--primary-blue, #3d8fec);
`;

export const WrapperTimes = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4px;
	margin: 0 0 5px 0;
`;

export const TodoTime = styled.span`
	font-size: 13px;
	font-weight: 600;
	line-height: 140%;
	color: var(--statuses-green, #50b810);
`;

export const TodoDescription = styled.p`
	margin: 0 0 8px 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 13px;
	font-weight: 400;
	line-height: 140%;
	color: var(--neuteral-black-primary, #555);
`;

export const WrapperTags = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;

export const TodoTag = styled.div<{
	backgroundColor: string;
	textColor: string;
}>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20px;
	padding: 0 6px;
	border-radius: 5px;
	font-size: 12px;
	font-weight: 600;
	line-height: 140%;
	color: ${(props) => props.textColor};
	background-color: ${(props) => props.backgroundColor};
`;

export const AbsoluteTag = styled.div`
	position: absolute;
	top: 0;
	right: -5px;
	bottom: 0;
`;

export const WrapperLower = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TodoAvatar = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 18px;
`;
