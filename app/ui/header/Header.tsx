import Image from 'next/image';
import {
	StyledHeader,
	CodeImageContainer,
	ProfileContainer,
	ProfileImageContainer,
} from './Header.styled';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeContext';
import ToggleButton from '../ToggleButton/ToggleButton';

export const Header = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<StyledHeader>
			<ToggleButton />
			<CodeImageContainer>
				<Image
					src={theme === 'dark' ? '/code-dark3.png' : '/code-light.png'}
					fill={true}
					alt='javascript code'
				/>
			</CodeImageContainer>
			<ProfileContainer>
				<div className='text'>
					<h1>Hi, I&#39;m Kate</h1>
					<p className='intro'>
						An aspiring frontend developer driven to tackle new challenges and
						grow within a strong team.
					</p>
					<div className='contact'>
						<p>
							<b>email:</b> kate.nordqvist@gmail.com
						</p>
						<p>
							<b>linkedin:</b>{' '}
							<Link
								href='https://www.linkedin.com/in/knordqvist'
								rel='noopener noreferrer'
								target='_blank'
							>
								linkedin.com/in/knordqvist
							</Link>
						</p>
						<p>
							<b>github: </b>{' '}
							<Link
								href='https://www.github.com/KateN87'
								rel='noopener noreferrer'
								target='_blank'
							>
								github.com/KateN87
							</Link>
						</p>
					</div>
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
