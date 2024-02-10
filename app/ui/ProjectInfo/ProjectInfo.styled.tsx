import styled from 'styled-components';

export const StyledProjectInfo = styled.div`
	width: 100%;
	padding: 10px 20px;

	& p {
		padding-top: 20px;
	}

	@media (max-width: 1200px) {
		padding: 5px;

		& p {
			padding-top: 10px;
		}
	}

	@media (max-width: 500px) {
		& p {
			font-size: 14px;
		}
	}
`;
