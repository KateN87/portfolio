'use client';
import { LogoProps } from '@/app/lib/definitions';
import styled from 'styled-components';

export const StyledLogoContainer = styled.div<LogoProps>`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props?.topSite ? 'column' : 'row')};
	height: ${(props) => (props?.topSite ? '250px' : '60px')};
	width: fit-content;
	margin-bottom: ${(props) => (props?.topSite ? '50px' : '')};
	margin-top: ${(props) => (props?.topSite ? '' : '49vh')};
	margin-right: 50px;

	@media (max-width: 600px) {
		margin-top: ${(props) => (props?.topSite ? '' : '45vh')};
	}

	& .inner-container {
		display: flex;
	}

	& .javascript {
		margin-left: ${(props) => (props?.topSite ? '110px' : '20px')};
		transform: ${(props) => (props?.topSite ? 'scale(1)' : 'scale(1)')};
		transition: all 0.5s ease-out;
	}

	& .react {
		margin-top: ${(props) => (props?.topSite ? '-5px' : '0px')};
		margin-left: ${(props) => (props?.topSite ? '-10px' : '-125px')};
		transform: ${(props) => (props?.topSite ? 'scale(1.4)' : 'scale(1.4)')};
		transition: all 0.5s ease-out;
	}

	& .typescript {
		margin-left: ${(props) => (props?.topSite ? '-100px' : '10px')};
		margin-top: ${(props) => (props?.topSite ? '40px' : '0px')};
		transform: ${(props) => (props?.topSite ? 'scale(1)' : 'scale(1)')};
		transition: all 0.5s ease-out;
	}

	& .node {
		margin-left: ${(props) => (props?.topSite ? '20px' : '20px')};
		margin-top: ${(props) => (props?.topSite ? '15px' : '0px')};
		transform: ${(props) => (props?.topSite ? 'scale(3)' : 'scale(3)')};
		transition: all 0.5s ease-out;
	}

	& .mongodb {
		margin-left: ${(props) => (props?.topSite ? '40px' : '110px')};
		margin-top: ${(props) => (props?.topSite ? '60px' : '')};
		transform: ${(props) => (props?.topSite ? 'scale(4)' : 'scale(4)')};
		transition: all 0.5s ease-out;
	}

	& .mysql {
		margin-right: ${(props) => (props?.topSite ? '30px' : '')};
		margin-left: ${(props) => (props?.topSite ? '' : '115px')};
		margin-top: ${(props) => (props?.topSite ? '' : '-5px')};
		transform: ${(props) => (props?.topSite ? 'scale(1.4)' : 'scale(1.5)')};
		transition: all 0.5s ease-out;
	}

	& .firebase {
		margin-left: ${(props) => (props?.topSite ? '40px' : '40px')};
		margin-top: ${(props) => (props?.topSite ? '20px' : '')};
		height: ${(props) => (props?.topSite ? '50px' : '')};
		transform: ${(props) => (props?.topSite ? 'scale(2)' : 'scale(2.1)')};
		transition: all 0.5s ease-in-out;
	}
`;

export const Logo = styled.div<LogoProps>`
	width: 40px;
	height: 40px;
`;
