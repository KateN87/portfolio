import styled from 'styled-components';

export const StyledBookProject = styled.div`
	width: 100%;
	height: 100%;
`;

export const StyledTopContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 50%;
`;

export const StyledBottomContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	height: 50%;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 110%;
	height: 100%;
	margin: 10px;

	&.imageVersion2 {
		margin-top: 50px;
		width: 60%;
		height: 60%;
	}

	&.imageVersion3 {
		margin-top: 30px;
		width: 40%;
		height: 80%;
	}
`;
