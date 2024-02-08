import Image from 'next/image';
import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import {
	ImageContainer,
	StyledBottomContainer,
	StyledMobileProject,
	StyledTopContainer,
} from './MobileProject.styled';
import { TITLES, DESCRIPTION, TECHFRONT } from '@/app/lib/textconstants';

const MobileProject = () => {
	return (
		<StyledMobileProject>
			<StyledTopContainer>
				<ProjectInfo
					title={TITLES.MOBILE}
					description={DESCRIPTION.MOBILE}
					techfront={TECHFRONT.MOBILE}
				/>
			</StyledTopContainer>
			<StyledBottomContainer>
				<ImageContainer>
					<Image
						src='/ProjectImages/mobile2.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
				<ImageContainer>
					<Image
						src='/ProjectImages/mobile3.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
				<ImageContainer>
					<Image
						src='/ProjectImages/mobile1.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
			</StyledBottomContainer>
		</StyledMobileProject>
	);
};

export default MobileProject;
