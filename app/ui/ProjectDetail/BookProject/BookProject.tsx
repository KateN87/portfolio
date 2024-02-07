import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import { StyledBookDetail } from './BookProject.styled';
import { TITLES, DESCRIPTION, TECHFRONT } from '@/app/lib/textconstants';

const BookProject = () => {
	return (
		<StyledBookDetail>
			<ProjectInfo
				title={TITLES.BOOK}
				description={DESCRIPTION.BOOK}
				techfront={TECHFRONT.BOOK}
			/>
		</StyledBookDetail>
	);
};

export default BookProject;
