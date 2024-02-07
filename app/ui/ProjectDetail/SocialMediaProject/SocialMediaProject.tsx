import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import { StyledSocialMediaProject } from './SocialMediaProject.styled';
import {
	TITLES,
	DESCRIPTION,
	TECHFRONT,
	TECHBACK,
} from '@/app/lib/textconstants';

const SocialMediaProject = () => {
	return (
		<StyledSocialMediaProject>
			<ProjectInfo
				title={TITLES.SOCIAL}
				description={DESCRIPTION.SOCIAL}
				techfront={TECHFRONT.SOCIAL}
				techback={TECHBACK.SOCIAL}
			/>
		</StyledSocialMediaProject>
	);
};

export default SocialMediaProject;
