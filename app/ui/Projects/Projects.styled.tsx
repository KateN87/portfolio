import styled from 'styled-components';

export const StyledProjectList = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin: 150px;

	& h2 {
		margin-bottom: 20px;
	}

	& li {
		list-style: none;
		font-size: 20px;
		padding: 10px;
	}
`;
