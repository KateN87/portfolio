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

export type ProjectObject = {
	title: string;
	description: string;
	techfront: string;
	techback?: string;
	image1: string;
	alt1: string;
	image2: string;
	alt2: string;
	image3?: string;
	alt3?: string;
	title2?: string;
	description2?: string;
	techfront2?: string;
};

export type ProjectProps = {
	project: ProjectObject;
};
