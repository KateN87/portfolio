import styled from 'styled-components';

export const StyledProjectList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: fit-content;
	margin-left: 100px;
	height: 600px;
	z-index: 50;

	& h2 {
		font-size: 36px;
		margin-bottom: 20px;
	}

	& li {
		display: flex;
		align-items: center;
		list-style: none;
		font-size: 24px;
		padding: 10px;
		cursor: pointer;

		& .arrow {
			margin: 5px 20px;
			width: 16px;
		}
	}
`;
