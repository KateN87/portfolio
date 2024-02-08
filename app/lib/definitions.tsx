import { Dispatch, SetStateAction } from 'react';

export type logoInfo = {
	alt: string;
	image: string;
	name: string;
};

export type LogoProps = {
	topSite: boolean;
};

export type ProjectListProps = {
	setChosenProject: Dispatch<SetStateAction<string>>;
	chosenProject?: string;
};

export type ProjectInfoProps = {
	title: string;
	description: string;
	techfront: string;
	techback?: string;
};
