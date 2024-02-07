'use client';
import styled from 'styled-components';
import { LogoProps } from './lib/definitions';

export const StyledMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 200vh;

	& .arrowDown,
	.arrowUp {
		width: 74px;
		height: 74px;
		fill: #f9ead984;
		align-self: flex-end;
		cursor: pointer;

		& :hover {
			fill: #f9ead9;
		}
	}

	& .arrowUp {
		/* align-self: flex-start; */
	}
`;

export const FirstContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 100vw;

	& .logo-arrow {
		display: flex;
		align-self: flex-end;
		justify-content: space-between;
		width: 50vw;
		height: 40%;
		margin-right: 35px;
	}
`;
export const SecondContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-self: center;
	height: fit-content;
	min-height: 100vh;
	width: 80vw;
	min-width: 500px;
`;

export const Logos = styled.div<LogoProps>`
	display: flex;
	width: 40vw;
	/* 	align-self: flex-end;
	justify-self: flex-end; */
	/* margin-left: 105px; */
	height: 100%;
	/* margin-right: 10px; */
	/* 	min-height: ${(props) => (props?.topSite ? '400px' : '80px')};
	margin-right: ${(props) => (props?.topSite ? '10px' : 'auto')}; */
	/* 	transform: ${(props) =>
		props?.topSite ? 'translate(0%, 140%)' : 'translate(-240%, 270%)'};
	transition: transform 1s ease-in-out; */
`;
