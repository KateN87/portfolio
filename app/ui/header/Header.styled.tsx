'use client';
import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100vw;
	height: 300px;
`;

export const CodeImageContainer = styled.div`
	position: relative;
	display: flex;
	height: 400px;
	min-width: 350px;
	width: 60vw;
	filter: blur(2px);
`;

export const ProfileContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	align-items: center;
	width: 70vw;
	min-width: 500px;
	right: 20px;
	top: 50px;

	.intro {
		font-size: 16px;
		max-width: 420px;
		line-height: 18px;
	}

	// Mobile
	@media (max-width: 600px) {
		flex-direction: column-reverse;
		min-width: 200px;
		align-self: center;
		justify-content: center;
	}
`;

export const ProfileImageContainer = styled.div`
	position: relative;
	margin-top: 10px;
	height: 200px;
	width: 160px;
	box-shadow: 0 0 4px 1px black;
`;
