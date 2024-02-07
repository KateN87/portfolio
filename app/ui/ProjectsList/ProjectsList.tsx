import { ProjectListProps } from '@/app/lib/definitions';
import { StyledProjectList } from './ProjectsList.styled';
import { SlArrowRight } from 'react-icons/sl';

const ProjectsList = ({ setChosenProject }: ProjectListProps) => {
	const projectArray = [
		'Secure e-commerce',
		'Mobile app',
		'Social media Platform',
		'E-commerce',
	];
	return (
		<StyledProjectList>
			<h2>My Projects</h2>
			<ul>
				{projectArray.map((project) => (
					<li key={project} onClick={() => setChosenProject(project)}>
						{project}
						<SlArrowRight className='arrow' />
					</li>
				))}
			</ul>
		</StyledProjectList>
	);
};

export default ProjectsList;