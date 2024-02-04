'use client';
import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100vw;
	height: 40vh;
	min-height: 200px;
`;

export const CodeImageContainer = styled.div`
	position: relative;
	display: flex;
	height: 50vh;
	min-height: 200px;
	min-width: 250px;
	width: 50vw;
	filter: blur(0.5px);
`;

export const ProfileContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	width: 60vw;
	min-width: 450px;
	right: 20px;
	top: 50px;

	.intro {
		font-size: 10px;
		max-width: 320px;
	}
`;

export const ProfileImageContainer = styled.div`
	position: relative;
	height: 130px;
	width: 100px;
	margin-right: 20px;
	box-shadow: 0 0 4px 1px black;
`;
