import Image from 'next/image';
import { StyledLogoContainer, Logo } from './LogoContainer.styled';
import { logoArray } from '@/app/lib/data';
import { LogoProps } from '@/app/lib/definitions';
import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeContext';

const LogoContainer = ({ topSite }: LogoProps) => {
	const { theme } = useContext(ThemeContext);
	return (
		<StyledLogoContainer topSite={topSite}>
			<div className='inner-container'>
				<Logo
					key={logoArray[0].name}
					className={logoArray[0].name}
					topSite={topSite}
				>
					<Image src={logoArray[0].image} fill={true} alt={logoArray[0].alt} />
				</Logo>
				<Logo
					key={logoArray[1].name}
					className={logoArray[1].name}
					topSite={topSite}
				>
					<Image src={logoArray[1].image} fill={true} alt={logoArray[1].alt} />
				</Logo>
			</div>
			<div className='inner-container'>
				<Logo
					key={logoArray[2].name}
					className={logoArray[2].name}
					topSite={topSite}
				>
					<Image src={logoArray[2].image} fill={true} alt={logoArray[2].alt} />
				</Logo>
				<Logo
					key={logoArray[3].name}
					className={logoArray[3].name}
					topSite={topSite}
				>
					<Image
						src={
							theme === 'dark' ? logoArray[3].image : '/nodejs-logo-dark.png'
						}
						fill={true}
						alt={logoArray[3].alt}
					/>
				</Logo>
				<Logo
					key={logoArray[4].name}
					className={logoArray[4].name}
					topSite={topSite}
				>
					<Image src={logoArray[4].image} fill={true} alt={logoArray[4].alt} />
				</Logo>
			</div>
			<div className='inner-container'>
				<Logo
					key={logoArray[5].name}
					className={logoArray[5].name}
					topSite={topSite}
				>
					<Image src={logoArray[5].image} fill={true} alt={logoArray[5].alt} />
				</Logo>
				<Logo
					key={logoArray[6].name}
					className={logoArray[6].name}
					topSite={topSite}
				>
					<Image
						src={theme === 'dark' ? logoArray[6].image : '/firebase-ar21.png'}
						fill={true}
						alt={logoArray[6].alt}
					/>
				</Logo>
			</div>
		</StyledLogoContainer>
	);
};

export default LogoContainer;
