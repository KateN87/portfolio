import styled from 'styled-components';

//all the same
export const StyledSecureProject = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

//
export const StyledTopContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 50%; //mobile project 30%

	&.version2 {
		height: 30%;
	}
`;

export const StyledBottomContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	height: 50%;

	// mobile
	&.version2 {
		height: 70%;
	}
`;

// secure
export const ImageContainer = styled.div`
	position: relative;
	width: 90%;
	height: 90%;
	margin: 10px;

	//mobile
	&.version2 {
		width: 30%;
	}

	// social
	&.version3 {
		width: 100%;
	}

	//book
	&.version4 {
		width: 110%;
		height: 100%;
		margin: 10px;
	}
	&.version5 {
		margin-top: 50px;
		width: 60%;
		height: 60%;
	}

	&.version6 {
		margin-top: 30px;
		width: 40%;
		height: 80%;
	}
`;
