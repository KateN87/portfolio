import Image from 'next/image';
import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import {
	ImageContainer,
	StyledBookProject,
	StyledBottomContainer,
	StyledTopContainer,
} from './BookProject.styled';
import { TITLES, DESCRIPTION, TECHFRONT } from '@/app/lib/textconstants';

const BookProject = () => {
	return (
		<StyledBookProject>
			<StyledTopContainer>
				<ProjectInfo
					title={TITLES.BOOK}
					description={DESCRIPTION.BOOK}
					techfront={TECHFRONT.BOOK}
				/>
				<ImageContainer>
					<Image
						src='/ProjectImages/book4.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
			</StyledTopContainer>
			<StyledBottomContainer>
				<ImageContainer className='imageVersion2'>
					<Image
						src='/ProjectImages/book1.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
				<ImageContainer className='imageVersion3'>
					<Image
						src='/ProjectImages/book3.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
			</StyledBottomContainer>
		</StyledBookProject>
	);
};

export default BookProject;
