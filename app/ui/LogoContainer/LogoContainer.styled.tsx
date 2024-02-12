'use client';
import { LogoProps } from '@/app/lib/definitions';
import styled from 'styled-components';

export const StyledLogoContainer = styled.div<LogoProps>`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props?.topSite ? 'column' : 'row')};
	height: ${(props) => (props?.topSite ? '300px' : '60px')};
	width: fit-content;

	margin-bottom: ${(props) => (props?.topSite ? '35px' : '')};
	margin-top: ${(props) => (props?.topSite ? '' : '48vh')};

	@media (max-width: 900px) {
		justify-content: flex-end;
		height: ${(props) => (props?.topSite ? '250px' : '60px')};
	}

	@media (max-width: 600px) {
		margin-top: ${(props) => (props?.topSite ? '' : '37vh')};
	}
	& .inner-container {
		display: flex;
		@media (max-width: 900px) {
			margin-bottom: ${(props) => (props?.topSite ? '10px' : '')};
		}
	}

	& .javascript {
		margin-left: ${(props) => (props?.topSite ? '190px' : '0px')};
		margin-right: ${(props) => (props?.topSite ? '40px' : '0px')};
		margin-top: ${(props) => (props?.topSite ? '20px' : '0px')};
		transform: ${(props) => (props?.topSite ? 'scale(1)' : 'scale(1)')};
		transition: all 0.5s ease-out;

		@media (max-width: 900px) {
			margin-right: ${(props) => (props?.topSite ? '10px' : '')};
		}
	}

	& .react {
		margin-right: ${(props) => (props?.topSite ? '30px' : '')};
		margin-top: ${(props) => (props?.topSite ? '10px' : '0px')};
		margin-left: ${(props) => (props?.topSite ? '' : '45px')};
		transform: ${(props) => (props?.topSite ? 'scale(1.4)' : 'scale(1.4)')};
		transition: all 0.5s ease-out;

		@media (max-width: 900px) {
			margin-right: ${(props) => (props?.topSite ? '20px' : '')};
			margin-bottom: ${(props) => (props?.topSite ? '40px' : '')};
		}
	}

	& .typescript {
		margin-left: ${(props) => (props?.topSite ? '30px' : '-85px')};
		margin-top: ${(props) => (props?.topSite ? '30px' : '0px')};
		transform: ${(props) => (props?.topSite ? 'scale(1)' : 'scale(1)')};
		transition: all 0.5s ease-out;
		@media (max-width: 900px) {
			margin-left: ${(props) => (props?.topSite ? '90px' : '')};
			margin-top: ${(props) => (props?.topSite ? '-30px' : '')};
		}
	}
	& .node {
		margin-left: ${(props) => (props?.topSite ? '80px' : '75px')};
		margin-top: ${(props) => (props?.topSite ? '20px' : '0px')};
		transform: ${(props) => (props?.topSite ? 'scale(2)' : 'scale(2.2)')};
		transition: all 0.5s ease-out;
		@media (max-width: 900px) {
			margin-left: ${(props) => (props?.topSite ? '40px' : '')};
			margin-top: ${(props) => (props?.topSite ? '-30px' : '')};
		}
	}

	& .mongodb {
		margin-left: ${(props) => (props?.topSite ? '80px' : '170px')};
		margin-right: ${(props) => (props?.topSite ? '20px' : '')};
		margin-top: ${(props) => (props?.topSite ? '20px' : '0px')};
		transform: ${(props) => (props?.topSite ? 'scale(0.9)' : 'scale(1)')};
		transition: all 0.5s ease-out;
		@media (max-width: 900px) {
			margin-left: ${(props) => (props?.topSite ? '30px' : '')};
			margin-top: ${(props) => (props?.topSite ? '-30px' : '')};
		}
	}

	& .mysql {
		margin-right: ${(props) => (props?.topSite ? '20px' : '')};
		margin-left: ${(props) => (props?.topSite ? '80px' : '-100px')};
		margin-top: ${(props) => (props?.topSite ? '' : '-5px')};
		transform: ${(props) => (props?.topSite ? 'scale(1.4)' : 'scale(1.5)')};
		transition: all 0.5s ease-out;
		@media (max-width: 900px) {
			margin-left: ${(props) => (props?.topSite ? '110px' : '')};
			margin-right: ${(props) => (props?.topSite ? '10px' : '')};
		}
	}

	& .firebase {
		margin-left: ${(props) => (props?.topSite ? '90px' : '-110px')};
		margin-top: ${(props) => (props?.topSite ? '10px' : '0px')};
		height: ${(props) => (props?.topSite ? '50px' : '')};
		transform: ${(props) => (props?.topSite ? 'scale(2)' : 'scale(2.1)')};
		transition: all 0.5s ease-in-out;
		@media (max-width: 900px) {
			margin-left: ${(props) => (props?.topSite ? '40px' : '')};
			margin-top: ${(props) => (props?.topSite ? '0px' : '')};
		}
	}
`;

export const Logo = styled.div<LogoProps>`
	width: ${(props) => (props?.topSite ? '80px' : '40px')};
	height: ${(props) => (props?.topSite ? '80px' : '40px')};

	@media (max-width: 900px) {
		width: ${(props) => (props?.topSite ? '40px' : '40px')};
		height: ${(props) => (props?.topSite ? '40px' : '40px')};
	}
`;
