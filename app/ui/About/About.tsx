import { aboutText } from '@/app/lib/data';
import { StyledMainContainer } from './About.styled';

const About = () => {
	return (
		<StyledMainContainer>
			{' '}
			{aboutText.split('\n').map((line, index) => (
				<p key={index}>{line}</p>
			))}
		</StyledMainContainer>
	);
};

export default About;
