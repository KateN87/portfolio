import Image from 'next/image';
import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import {
	ImageContainer,
	StyledBottomContainer,
	StyledSocialMediaProject,
	StyledTopContainer,
} from './SocialMediaProject.styled';
import {
	TITLES,
	DESCRIPTION,
	TECHFRONT,
	TECHBACK,
} from '@/app/lib/textconstants';

const SocialMediaProject = () => {
	return (
		<StyledSocialMediaProject>
			<StyledTopContainer>
				<ProjectInfo
					title={TITLES.SOCIAL}
					description={DESCRIPTION.SOCIAL}
					techfront={TECHFRONT.SOCIAL}
					techback={TECHBACK.SOCIAL}
				/>
				<ImageContainer>
					<Image
						src='/ProjectImages/social1.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
			</StyledTopContainer>
			<StyledBottomContainer>
				<ProjectInfo
					title={TITLES.SOCIAL2}
					description={DESCRIPTION.SOCIAL2}
					techfront={TECHFRONT.SOCIAL2}
				/>
				<ImageContainer>
					<Image
						src='/ProjectImages/social2.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
			</StyledBottomContainer>
		</StyledSocialMediaProject>
	);
};

export default SocialMediaProject;
