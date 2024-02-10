import styled from 'styled-components';

export const StyledProjectContainer = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: flex-end;
	height: 100vh;
	width: 100vw;
	z-index: 40;
	padding-right: 50px;
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);

	@media (max-width: 1000px) {
		padding-right: 5px;
	}
	@media (max-width: 1000px) {
		z-index: 60;
		padding-left: 5px;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--background-color);
	border: 2px solid var(--text-color);
	width: 60vw;
	max-width: 1200px;
	height: 70vh;

	& h2 {
		display: flex;
		justify-content: flex-end;
		height: fit-content;
		padding-right: 10px;
		font-size: 36px;
		color: #f9ead984;
		cursor: pointer;

		&:hover {
			color: #f9ead9;
		}
	}

	@media (max-width: 1000px) {
		width: 100vw;
		height: 80%;
	}
`;
