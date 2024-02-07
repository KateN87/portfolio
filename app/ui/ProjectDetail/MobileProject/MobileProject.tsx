import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import { StyledMobileProject } from './MobileProject.styled';
import { TITLES, DESCRIPTION, TECHFRONT } from '@/app/lib/textconstants';

const MobileProject = () => {
	return (
		<StyledMobileProject>
			<ProjectInfo
				title={TITLES.MOBILE}
				description={DESCRIPTION.MOBILE}
				techfront={TECHFRONT.MOBILE}
			/>
		</StyledMobileProject>
	);
};

export default MobileProject;
