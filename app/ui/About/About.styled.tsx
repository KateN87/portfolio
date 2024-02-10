import styled from 'styled-components';

export const StyledMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 60px;
	margin: 0 auto;
	max-width: 980px;

	& p {
		font-size: 18px;
		margin-top: 15px;
	}

	@media (max-width: 750px) {
		& p {
			font-size: 14px;
			margin-top: 10px;
		}
	}
`;
