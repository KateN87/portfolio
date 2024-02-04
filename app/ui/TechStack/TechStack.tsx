import { techStackArray } from '@/app/lib/data';

export const TechStack = () => {
	return (
		<div>
			TechStack
			<ul>
				{techStackArray.map((stack) => (
					<li key={stack}>{stack}</li>
				))}
			</ul>
		</div>
	);
};
