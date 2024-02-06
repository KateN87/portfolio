import Image from 'next/image';
import { StyledLogoContainer, Logo } from './LogoContainer.styled';
import { logoArray } from '@/app/lib/data';
import { LogoProps } from '@/app/lib/definitions';

const LogoContainer = ({ topSite }: LogoProps) => {
	return (
		<StyledLogoContainer topSite={topSite}>
			{logoArray.map((logo) => (
				<Logo key={logo.name} className={logo.name} topSite={topSite}>
					<Image src={logo.image} fill={true} alt={logo.alt} />
				</Logo>
			))}
		</StyledLogoContainer>
	);
};

export default LogoContainer;
