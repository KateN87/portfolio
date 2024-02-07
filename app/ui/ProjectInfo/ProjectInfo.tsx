import { ProjectInfoProps } from '@/app/lib/definitions';
import { StyledProjectInfo } from './ProjectInfo.styled';

const ProjectInfo = ({
	title,
	description,
	techfront,
	techback,
}: ProjectInfoProps) => {
	return (
		<StyledProjectInfo>
			<h3>{title}</h3>
			<p>{description}</p>
			<p>
				<b>Frontend: </b> {techfront}
			</p>
			{techback && (
				<p>
					<b>Backend: </b> {techback}
				</p>
			)}
		</StyledProjectInfo>
	);
};

export default ProjectInfo;
