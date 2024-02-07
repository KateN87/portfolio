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
	chosenProject?:
		| 'Secure e-commerce'
		| 'Mobile app'
		| 'Social media Platform'
		| 'E-commerce'
		| '';
};
