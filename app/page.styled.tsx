'use client';
import styled from 'styled-components';
import { LogoProps } from './lib/definitions';

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
	align-items: center;
`;

export const Logos = styled.div<LogoProps>`
	display: flex;
	width: 40vw;
	margin-left: 105px;
	height: ${(props) => (props?.topSite ? '40vh' : '40vh')};
	min-height: ${(props) => (props?.topSite ? '400px' : '80px')};
	margin-right: ${(props) => (props?.topSite ? '10px' : 'auto')};
	transform: ${(props) =>
		props?.topSite ? 'translate(0%, 140%)' : 'translate(-240%, 270%)'};
	transition: transform 1s ease-in-out;
`;
