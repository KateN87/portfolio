import { ProjectListProps } from '@/app/lib/definitions';
import {
	InnerContainer,
	StyledProjectContainer,
} from './ProjectContainer.styled';

const ProjectContainer = ({
	setChosenProject,
	chosenProject,
}: ProjectListProps) => {
	return (
		<StyledProjectContainer onClick={() => setChosenProject('')}>
			<InnerContainer>
				<h2>{chosenProject}</h2>
			</InnerContainer>
		</StyledProjectContainer>
	);
};

export default ProjectContainer;
