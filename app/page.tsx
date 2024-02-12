'use client';
import { useContext, useRef, useState, WheelEvent } from 'react';

import {
	StyledMainContainer,
	FirstContainer,
	SecondContainer,
} from './page.styled';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import LogoContainer from './ui/LogoContainer/LogoContainer';
import { Header } from './ui/header/Header';
import About from './ui/About/About';
import { TechStack } from './ui/TechStack/TechStack';
import ProjectsList from './ui/ProjectsList/ProjectsList';
import ProjectContainer from './ui/ProjectContainer/ProjectContainer';
import { ThemeContext } from './ThemeContext';

export default function Home() {
	const firstRef = useRef<HTMLDivElement | null>(null);
	const secondRef = useRef<HTMLDivElement | null>(null);
	const [topSite, setTopSite] = useState(true);
	const [chosenProject, setChosenProject] = useState('');

	const scrollDown = () => {
		const offsetTop = secondRef.current?.offsetTop;
		if (offsetTop !== undefined) {
			setTopSite(false);
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth',
			});
		}
	};

	const scrollUp = () => {
		const offsetTop = firstRef.current?.offsetTop;
		if (offsetTop !== undefined) {
			setTopSite(true);
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth',
			});
		}
	};

	const wheel = (e: WheelEvent<HTMLDivElement>) => {
		{
			if (e.deltaY < 0) {
				scrollUp();
			} else {
				scrollDown();
			}
		}
	};

	return (
		<StyledMainContainer onWheel={(e) => wheel(e)}>
			<FirstContainer ref={firstRef} topSite={topSite}>
				<Header />
				<ProjectsList setChosenProject={setChosenProject} />
				{chosenProject && (
					<ProjectContainer
						setChosenProject={setChosenProject}
						chosenProject={chosenProject}
					/>
				)}
				<div className='logo-arrow'>
					<SlArrowDown className='arrowDown' onClick={scrollDown} />
					<LogoContainer topSite={topSite} />
				</div>
			</FirstContainer>

			<SecondContainer ref={secondRef}>
				<div className='arrow'>
					<SlArrowUp className='arrowUp' onClick={scrollUp} />
				</div>
				<div className='tech-about'>
					<TechStack />
					<About />
				</div>
			</SecondContainer>
		</StyledMainContainer>
	);
}
