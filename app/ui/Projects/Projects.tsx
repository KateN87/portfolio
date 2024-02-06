import { StyledProjectList } from './Projects.styled';

export const Projects = () => {
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
					<li key={project}>{project}</li>
				))}
			</ul>
		</StyledProjectList>
	);
};
