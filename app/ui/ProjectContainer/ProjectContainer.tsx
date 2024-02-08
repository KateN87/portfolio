import { ProjectListProps } from '@/app/lib/definitions';
import {
	InnerContainer,
	StyledProjectContainer,
} from './ProjectContainer.styled';
import SecureProject from '../ProjectDetail/SecureProject/SecureProject';
import BookProject from '../ProjectDetail/BookProject/BookProject';
import MobileProject from '../ProjectDetail/MobileProject/MobileProject';
import SocialMediaProject from '../ProjectDetail/SocialMediaProject/SocialMediaProject';

const ProjectContainer = ({
	setChosenProject,
	chosenProject,
}: ProjectListProps) => {
	const Project = () => {
		switch (chosenProject) {
			case 'Secure e-commerce':
				return <SecureProject />;
			case 'Mobile app':
				return <MobileProject />;
			case 'Social media Platform':
				return <SocialMediaProject />;
			case 'E-commerce':
				return <BookProject />;
			default:
				return <SecureProject />;
		}
	};

	return (
		<StyledProjectContainer chosenProject={chosenProject}>
			<InnerContainer>
				<h2 onClick={() => setChosenProject('')}>X</h2>
				<Project />
			</InnerContainer>
		</StyledProjectContainer>
	);
};

export default ProjectContainer;
