'use client';
import styled from 'styled-components';

export const StyledLogoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 500px;
	height: 400px;

	& .javascript {
		bottom: 250px;
		right: 200px;
	}

	& .react {
		right: 50px;
		bottom: 250px;
		width: 120px;
		height: 120px;
	}

	& .typescript {
		bottom: 150px;
		right: 300px;
	}

	& .mongodb {
		bottom: 50px;
		right: 20px;
		width: 80px;
		height: 80px;
	}

	& .firebase {
		bottom: 0px;
		right: 300px;
		width: 180px;
		height: 140px;
	}

	& .node {
		bottom: 130px;
		right: 80px;
		width: 140px;
		height: 140px;
	}

	& .mysql {
		bottom: 50px;
		right: 150px;
		width: 100px;
		height: 100px;
	}
`;

export const Logo = styled.div`
	position: absolute;
	width: 90px;
	height: 90px;
`;
