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
				<Image src='/code-dark3.png' fill={true} alt='javascript code' />
			</CodeImageContainer>
			<ProfileContainer>
				<div className='text'>
					<h1>Hi, I&#39;m Kate</h1>
					<p className='intro'>
						An aspiring frontend developer driven to tackle new challenges and
						grow within a strong team.
					</p>
				</div>

				<ProfileImageContainer>
					<Image
						src='/profile-edit.png'
						height={200}
						width={160}
						alt='black and white photo of woman'
					/>
				</ProfileImageContainer>
			</ProfileContainer>
		</StyledHeader>
	);
};
