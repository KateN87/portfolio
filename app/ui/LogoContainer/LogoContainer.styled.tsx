'use client';
import { LogoProps } from '@/app/lib/definitions';
import styled from 'styled-components';

export const StyledLogoContainer = styled.div<LogoProps>`
	/* 	display: flex; */
	/* flex-wrap: wrap; */

	& .javascript {
		bottom: 250px;
		right: 200px;
		transform: ${(props) =>
			props?.topSite
				? 'scale(1) translate(0%, 0%)'
				: 'scale(1) translate(-400%, -400%)'};
		transition: transform 0.5s;
	}

	& .react {
		bottom: 250px;
		right: 50px;
		transform: ${(props) =>
			props?.topSite
				? 'scale(1.4) translate(0%, 0%)'
				: 'scale(1.4) translate(-390%, -290%)'};
		/* transition: transform 0.5s; */
	}

	& .typescript {
		bottom: 150px;
		right: 300px;
		transform: ${(props) =>
			props?.topSite
				? 'scale(1) translate(0%, 0%)'
				: 'scale(1) translate(-42%, -655%)'};
		transition: transform 0.5s;
	}

	& .mongodb {
		bottom: 35px;
		right: 20px;

		transform: ${(props) =>
			props?.topSite
				? 'scale(0.9) translate(0%, 0%)'
				: 'scale(1) translate(-510%, -940%)'};
		transition: transform 0.5s;
	}

	& .firebase {
		bottom: 40px;
		right: 370px;
		height: ${(props) => (props?.topSite ? '50px' : '30px')};
		transform: ${(props) =>
			props?.topSite
				? 'scale(3) translate(0%, 0%)'
				: 'scale(2.8) translate(275%, -445%)'};
		transition: transform 0.5s;
	}

	& .node {
		bottom: 150px;
		right: 90px;
		transform: ${(props) =>
			props?.topSite
				? 'scale(2) translate(0%, 0%)'
				: 'scale(2.2) translate(-70%, -300%)'};
		transition: 0.5s;
	}

	& .mysql {
		bottom: 40px;
		right: 170px;
		transform: ${(props) =>
			props?.topSite
				? 'scale(1.4) translate(0%, 0%)'
				: 'scale(1.5) translate(310%, -620%)'};
		transition: transform 0.5s;
	}
`;

export const Logo = styled.div<LogoProps>`
	position: absolute;
	width: ${(props) => (props?.topSite ? '90px' : '40px')};
	height: ${(props) => (props?.topSite ? '90px' : '40px')};
`;
