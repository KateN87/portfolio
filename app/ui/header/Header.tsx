import Image from 'next/image';
import {
	StyledHeader,
	CodeImageContainer,
	ProfileContainer,
	ProfileImageContainer,
} from './Header.styled';

export const Header = () => {
	return (
		<StyledHeader>
			<CodeImageContainer>
				<Image src='/code-dark.png' fill={true} alt='javascript code' />
			</CodeImageContainer>
			<ProfileContainer>
				<div className='text'>
					<p>Hi, I&#39;m Kate</p>
					<p className='intro'>
						An aspiring frontend developer driven to tackle new challenges and
						grow within a strong team.{' '}
					</p>
				</div>

				<ProfileImageContainer>
					<Image
						src='/profile-edit.png'
						fill={true}
						alt='black and white photo of woman'
					/>
				</ProfileImageContainer>
			</ProfileContainer>
		</StyledHeader>
	);
};
