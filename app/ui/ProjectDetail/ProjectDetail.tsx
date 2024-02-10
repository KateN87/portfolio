import Image from 'next/image';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import {
	ImageContainer,
	StyledBottomContainer,
	StyledProjectDetail,
	StyledTopContainer,
} from './ProjectDetail.styled';
import { ProjectProps } from '@/app/lib/definitions';

const ProjectDetail = ({ project }: ProjectProps) => {
	const GetLayoutTop = ({ name }: { name: string }) => {
		switch (name) {
			case 'Mobile app - expo':
				return (
					<ProjectInfo
						title={project.title}
						description={project.description}
						techfront={project.techfront}
						techback={project.techback}
					/>
				);
			default:
				return (
					<>
						<ProjectInfo
							title={project.title}
							description={project.description}
							techfront={project.techfront}
							techback={project.techback}
						/>
						<ImageContainer
							className={
								project.title === 'Social Media - fullstack' ? 'version3' : ''
							}
						>
							<Image src={project.image1} fill={true} alt={project.alt1} />
						</ImageContainer>
					</>
				);
		}
	};

	const GetLayoutBottom = ({ name }: { name: string }) => {
		switch (name) {
			case 'Mobile app - expo':
				return (
					<>
						<ImageContainer className='version2'>
							<Image src={project.image1} fill={true} alt={project.alt1} />
						</ImageContainer>
						<ImageContainer className='version2'>
							<Image src={project.image2} fill={true} alt={project.alt2} />
						</ImageContainer>
						{project.image3 && project.alt3 && (
							<ImageContainer className='version2'>
								<Image src={project.image3} fill={true} alt={project.alt3} />
							</ImageContainer>
						)}
					</>
				);
			case 'Social Media - fullstack':
				return (
					<>
						{project.title2 && project.description2 && project.techfront2 && (
							<>
								<ProjectInfo
									title={project.title2}
									description={project.description2}
									techfront={project.techfront2}
								/>
								<ImageContainer className='version3'>
									<Image src={project.image2} fill={true} alt={project.alt2} />
								</ImageContainer>
							</>
						)}
					</>
				);
			default:
				return (
					<>
						<ImageContainer
							className={
								project.title === 'E-commerce - frontend' ? 'version5' : ''
							}
						>
							<Image src={project.image2} fill={true} alt={project.alt2} />
						</ImageContainer>
						{project.image3 && project.alt3 && (
							<ImageContainer
								className={
									project.title === 'E-commerce - frontend' ? 'version6' : ''
								}
							>
								<Image src={project.image3} fill={true} alt={project.alt3} />
							</ImageContainer>
						)}
					</>
				);
		}
	};

	return (
		<StyledProjectDetail>
			<StyledTopContainer
				className={project.title === 'Mobile app - expo' ? 'version2' : ''}
			>
				<GetLayoutTop name={project.title} />
			</StyledTopContainer>
			<StyledBottomContainer
				className={project.title === 'Mobile app - expo' ? 'version2' : ''}
			>
				<GetLayoutBottom name={project.title} />
			</StyledBottomContainer>
		</StyledProjectDetail>
	);
};

export default ProjectDetail;
