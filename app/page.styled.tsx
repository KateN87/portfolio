'use client';
import styled from 'styled-components';

export const StyledMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 200vh;

	& .arrowDown,
	.arrowUp {
		position: absolute;
		display: flex;
		align-self: flex-end;
		width: 74px;
		height: 74px;
		left: 50vw;
		fill: #f9ead984;
		cursor: pointer;

		& :hover {
			fill: #f9ead9;
		}
	}

	& .arrowUp {
		align-self: flex-start;
	}
`;

export const FirstContainer = styled.div`
	display: flex;
	height: 100vh;
`;
export const SecondContainer = styled.div`
	display: flex;
	height: 100vh;
`;

export const Logos = styled.div`
	display: flex;
	align-self: flex-end;
`;
