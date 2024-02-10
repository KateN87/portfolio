import styled from 'styled-components';

export const StyledTechStack = styled.div`
	height: fit-content;
	margin-right: 40px;

	& h2 {
		margin-bottom: 10px;
	}
	& li {
		list-style: none;
		font-size: 20px;
		padding: 10px 0;
	}

	@media (max-width: 750px) {
		& h2 {
			font-size: 18px;
			margin-bottom: 10px;
			align-self: flex-start;
			margin-top: 0;
		}
		& li {
			font-size: 18px;
			padding: 5px 0;
		}
	}
`;
