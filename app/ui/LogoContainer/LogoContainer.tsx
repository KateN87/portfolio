import Image from 'next/image';
import { StyledLogoContainer, Logo } from './LogoContainer.styled';
import { logoArray } from '@/app/lib/data';

const LogoContainer = () => {
	return (
		<StyledLogoContainer>
			{logoArray.map((logo) => (
				<Logo key={logo.name} className={logo.name}>
					<Image src={logo.image} fill={true} alt={logo.alt} />
				</Logo>
			))}
		</StyledLogoContainer>
	);
};

export default LogoContainer;
