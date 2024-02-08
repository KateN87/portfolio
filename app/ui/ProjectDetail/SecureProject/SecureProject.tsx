import Image from 'next/image';
import ProjectInfo from '../../ProjectInfo/ProjectInfo';
import {
	ImageContainer,
	StyledBottomContainer,
	StyledSecureProject,
	StyledTopContainer,
} from './SecureProject.styled';
import {
	TITLES,
	DESCRIPTION,
	TECHFRONT,
	TECHBACK,
} from '@/app/lib/textconstants';

const SecureProject = () => {
	return (
		<StyledSecureProject>
			<StyledTopContainer>
				<ProjectInfo
					title={TITLES.SECURE}
					description={DESCRIPTION.SECURE}
					techfront={TECHFRONT.SECURE}
					techback={TECHBACK.SECURE}
				/>
				<ImageContainer>
					<Image
						src='/ProjectImages/secure1.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
			</StyledTopContainer>
			<StyledBottomContainer>
				<ImageContainer>
					<Image
						src='/ProjectImages/secure2.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
				<ImageContainer>
					<Image
						src='/ProjectImages/secure3.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ImageContainer>
			</StyledBottomContainer>
		</StyledSecureProject>
	);
};

export default SecureProject;
