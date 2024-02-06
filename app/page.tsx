'use client';
import { useRef, useState, WheelEvent } from 'react';
import {
	StyledMainContainer,
	Logos,
	FirstContainer,
	SecondContainer,
} from './page.styled';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import LogoContainer from './ui/LogoContainer/LogoContainer';
import { Header } from './ui/header/Header';
import About from './ui/About/About';
import { TechStack } from './ui/TechStack/TechStack';
import { Projects } from './ui/Projects/Projects';

export default function Home() {
	const firstRef = useRef<HTMLDivElement | null>(null);
	const secondRef = useRef<HTMLDivElement | null>(null);
	const [topSite, setTopSite] = useState(true);

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
			<FirstContainer ref={firstRef}>
				<div>
					<Header />
					<Projects />
				</div>
				<SlArrowDown className='arrowDown' onClick={scrollDown} />

				<Logos topSite={topSite}>
					<LogoContainer topSite={topSite} />
				</Logos>
			</FirstContainer>

			<SecondContainer ref={secondRef}>
				<SlArrowUp className='arrowUp' onClick={scrollUp} />
				<TechStack />
				<About />
			</SecondContainer>
		</StyledMainContainer>
	);
}
