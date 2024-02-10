import { ProjectListProps } from '@/app/lib/definitions';
import {
	InnerContainer,
	StyledProjectContainer,
} from './ProjectContainer.styled';
import { ProjectObject } from '@/app/lib/data';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
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
				return ProjectObject.secure;
			case 'Mobile app':
				return ProjectObject.mobile;
			case 'Social media Platform':
				return ProjectObject.socialmedia;
			case 'E-commerce':
				return ProjectObject.book;
			default:
				return ProjectObject.secure;
		}
	};

	return (
		<StyledProjectContainer>
			<InnerContainer>
				<h2 onClick={() => setChosenProject('')}>X</h2>

				<ProjectDetail project={Project()} />
			</InnerContainer>
		</StyledProjectContainer>
	);
};

export default ProjectContainer;
