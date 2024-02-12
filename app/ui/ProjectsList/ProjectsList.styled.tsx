import styled from 'styled-components';

export const StyledProjectList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: fit-content;
	margin-left: 5vw;
	height: 600px;
	z-index: 50;

	& li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		font-size: 24px;
		padding: 10px;
		cursor: pointer;

		& .arrow {
			margin: 5px 20px;
			min-width: 16px !important;
			min-height: 16px !important;
		}
	}

	@media (max-width: 600px) {
		justify-content: flex-start;
		margin: 50px 40px;
		align-items: center;

		& h2 {
			font-size: 24px;
			margin-bottom: 10px;
			align-self: flex-start;
		}

		& li {
			font-size: 18px;
			padding-left: 10px;
		}
	}

	@media (max-width: 1000px) {
		margin-left: 5px;
	}
`;
