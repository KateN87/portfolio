import { ToggleProps } from '@/app/lib/definitions';
import styled from 'styled-components';

export const StyledToggleContainer = styled.div`
	position: absolute;
	right: 20px;
	display: flex;
	align-items: center;
	height: 32px;
	z-index: 15;

	& .icon {
		margin-left: 10px;
	}
`;

export const StyledToggleTrack = styled.div<ToggleProps>`
	position: relative;
	width: 30px;
	height: 15px;
	background-color: ${(props) => (props?.isActive ? '#767676' : '#222222')};
	border-radius: 15px;
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
	overflow: hidden;
	z-index: 2;
`;

export const StyledToggleThumb = styled.div<ToggleProps>`
	position: absolute;
	top: 2px;
	left: ${(props) => (props?.isActive ? '18px' : '2px')};
	width: 10px;
	height: 10px;
	background-color: ${(props) => (props?.isActive ? '#222222' : '#767676')};
	border-radius: 50%;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	transition: left 0.4s ease-in-out;
	z-index: 3;
`;
