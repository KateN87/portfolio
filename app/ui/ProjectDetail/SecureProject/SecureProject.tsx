import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import { StyledSecureProject } from './SecureProject.styled';
import {
	TITLES,
	DESCRIPTION,
	TECHFRONT,
	TECHBACK,
} from '@/app/lib/textconstants';

const SecureProject = () => {
	return (
		<StyledSecureProject>
			<ProjectInfo
				title={TITLES.SECURE}
				description={DESCRIPTION.SECURE}
				techfront={TECHFRONT.SECURE}
				techback={TECHBACK.SECURE}
			/>
		</StyledSecureProject>
	);
};

export default SecureProject;
