import { techStackArray } from '@/app/lib/data';
import { StyledTechStack } from './TechStack.styled';

export const TechStack = () => {
	return (
		<StyledTechStack>
			<h2>TechStack</h2>
			<ul>
				{techStackArray.map((stack) => (
					<li key={stack}>{stack}</li>
				))}
			</ul>
		</StyledTechStack>
	);
};
