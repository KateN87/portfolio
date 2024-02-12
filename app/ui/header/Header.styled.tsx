'use client';
import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100vw;
	height: 300px;

	@media (max-width: 600px) {
		height: 340px;
	}
`;
export const StyledButton = styled.button`
	z-index: 2;
	height: 20px;
`;

export const CodeImageContainer = styled.div`
	position: absolute;
	display: flex;
	height: 400px;
	min-width: 500px;
	width: 60vw;
	left: 0;
	filter: blur(2px);
	z-index: 1;
`;

export const ProfileContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	align-items: center;
	width: 80vw;
	min-width: 580px;
	max-width: 1200px;
	margin-top: 50px;
	z-index: 5;

	& .intro {
		font-size: 16px;
		max-width: 420px;
		line-height: 18px;
		background-color: var(--background-color);
	}

	& .contact {
		background-color: var(--background-color);
		font-size: 14px;
		margin-top: 20px;
		& p {
			padding-top: 2px;
		}
	}

	@media (max-width: 600px) {
		flex-direction: column-reverse;
		min-width: 200px;
		margin: auto;
	}
`;

export const ProfileImageContainer = styled.div`
	position: relative;
	margin-top: 10px;
	height: 200px;
	width: 160px;
	box-shadow: 0 0 4px 1px black;
`;
