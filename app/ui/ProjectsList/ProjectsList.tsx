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
			<ul>
				{projectArray.map((project) => (
					<li key={project} onClick={() => setChosenProject(project)}>
						{project}
						<SlArrowRight className='arrow' viewBox=' 100 100 800 800' />
					</li>
				))}
			</ul>
		</StyledProjectList>
	);
};

export default ProjectsList;
