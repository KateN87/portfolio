import { logoInfo } from './definitions';
import { TITLES, DESCRIPTION, TECHFRONT, TECHBACK } from './textconstants';

export const logoArray: logoInfo[] = [
	{
		alt: 'javascript logo',
		image: '/javascript-logo.svg',
		name: 'javascript',
	},
	{
		alt: 'react logo',
		image: '/react-logo.svg',
		name: 'react',
	},
	{
		alt: 'typescript logo',
		image: '/typescript-logo.png',
		name: 'typescript',
	},
	{
		alt: 'node logo',
		image: '/node-logo.svg',
		name: 'node',
	},
	{
		alt: 'mongodb logo',
		image: '/mongodb-logo.svg',
		name: 'mongodb',
	},
	{
		alt: 'mysql logo',
		image: '/mysql-logo.svg',
		name: 'mysql',
	},
	{
		alt: 'firebase logo',
		image: '/firebase-logo.png',
		name: 'firebase',
	},
];

export const techStackArray = [
	'Javascript',
	'Typescript',
	'React',
	'React Native',
	'Node.js',
	'Firebase',
	'MySQL',
	'mongoDB',
];

export const aboutText =
	"Hi!\nI'm Kate, a junior Frontend developer searching for new ways to challenge myself.\nThroughout my education, I have particularly enjoyed working with React/React-Native, Node.js, and Express and would like to work more towards becoming a fullstack-developer. In my free time, I often engage in different projects and courses to gain a deeper understanding of how things work.\n\nIf you visit my Github you can see that my activity contribution is filled with beautiful green dots, some would say it is because I'm a nerd, and I would agree.\nMy projects may not be the most beautiful regarding design, but I've poured my heart into making them functional and trying to learn best practices within the area.\n\nIn my previous roles I developed a profound understanding of the significance of strong teamwork. Both as a teacher and an animal caretaker, I have honed the ability to work methodically and document my work clearly, which has proven to be a strength in my programming development. I have received multiple positive feedback for my adherence to clean code standards.\n\nI am confident that my passion for development, my willingness to take on challenges, and my commitment to continuous learning would make me a valuable asset to your team.\n\nBest regards, Kate Nordqvist";

export const ProjectObject = {
	secure: {
		title: TITLES.SECURE,
		description: DESCRIPTION.SECURE,
		techfront: TECHFRONT.SECURE,
		techback: TECHBACK.SECURE,
		image1: '/ProjectImages/secure1.png',
		alt1: 'black and white photo of woman',
		image2: '/ProjectImages/secure2.png',
		alt2: 'black and white photo of woman',
		image3: '/ProjectImages/secure3.png',
		alt3: 'black and white photo of woman',
	},
	mobile: {
		title: TITLES.MOBILE,
		description: DESCRIPTION.MOBILE,
		techfront: TECHFRONT.MOBILE,
		image1: '/ProjectImages/mobile2.png',
		alt1: 'black and white photo of woman',
		image2: '/ProjectImages/mobile3.png',
		alt2: 'black and white photo of woman',
		image3: '/ProjectImages/mobile1.png',
		alt3: 'black and white photo of woman',
	},
	socialmedia: {
		title: TITLES.SOCIAL,
		description: DESCRIPTION.SOCIAL,
		techfront: TECHFRONT.SOCIAL,
		techback: TECHBACK.SOCIAL,
		image1: '/ProjectImages/social1.png',
		alt1: 'black and white photo of woman',
		title2: TITLES.SOCIAL2,
		description2: DESCRIPTION.SOCIAL2,
		techfront2: TECHFRONT.SOCIAL2,
		image2: '/ProjectImages/social2.png',
		alt2: 'black and white photo of woman',
	},
	book: {
		title: TITLES.BOOK,
		description: DESCRIPTION.BOOK,
		techfront: TECHFRONT.BOOK,
		image1: '/ProjectImages/book4.png',
		alt1: 'black and white photo of woman',
		image2: '/ProjectImages/book1.png',
		alt2: 'black and white photo of woman',
		image3: '/ProjectImages/book3.png',
		alt3: 'black and white photo of woman',
	},
};
