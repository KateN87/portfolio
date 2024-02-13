'use client';
import styled from 'styled-components';
import { LogoProps } from './lib/definitions';

type ChosenProps = {
	chosenProject?: string;
};

export const StyledMainContainer = styled.div<ChosenProps>`
	display: flex;
	flex-direction: column;
	height: 200vh;

	& .arrowDown,
	.arrowUp {
		position: absolute;
		width: 74px;
		height: 74px;
		bottom: 0;
		fill: var(--text-transparent);
		left: 45vw;
		cursor: pointer;
		z-index: 100;

		& :hover {
			fill: var(--text-color);
		}
	}

	& .arrowUp {
		align-self: center;
		top: 100vh;
	}
`;

export const FirstContainer = styled.div<LogoProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 100vw;

	& .logo-arrow {
		display: flex;
		align-self: ${(props) => (props?.topSite ? 'flex-end' : 'flex-start')};
		justify-content: ${(props) => (props?.topSite ? 'flex-end' : 'flex-start')};
		width: 50vw;
		height: 40%;
	}
`;

export const SecondContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	padding-top: 50px;

	& .tech-about {
		display: flex;
		justify-content: space-between;
		padding: 140px 40px;
		height: 100vh;

		@media (max-width: 650px) {
			padding: 140px 10px;
		}
	}

	& .arrow {
		display: flex;
		width: fit-content;
		align-self: center;
	}
`;
