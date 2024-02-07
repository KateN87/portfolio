import styled from 'styled-components';

export const StyledProjectContainer = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: flex-end;
	height: 100vh;
	width: 100vw;
	z-index: 40;
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	padding-right: 50px;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: var(--background-color);
	border: 2px solid var(--text-color);
	width: 60vw;
	height: 70vh;

	& h2 {
		height: fit-content;
		padding: 10px 15px;
		font-size: 36px;
		color: #f9ead984;
		cursor: pointer;

		&:hover {
			color: #f9ead9;
		}
	}
`;
