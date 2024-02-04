'use client';
import { useRef, WheelEvent } from 'react';
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

export default function Home() {
	const firstRef = useRef<HTMLDivElement | null>(null);
	const secondRef = useRef<HTMLDivElement | null>(null);

	const scrollDown = () => {
		const offsetTop = firstRef.current?.offsetTop;
		if (offsetTop !== undefined) {
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth',
			});
		}
	};

	const scrollUp = () => {
		const offsetTop = secondRef.current?.offsetTop;
		if (offsetTop !== undefined) {
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
			<FirstContainer ref={secondRef}>
				<Header />
				<SlArrowDown className='arrowDown' onClick={scrollDown} />
				<Logos>
					<LogoContainer />
				</Logos>
			</FirstContainer>
			<SecondContainer ref={firstRef}>
				<SlArrowUp className='arrowUp' onClick={scrollUp} />
				<About />
				<TechStack />
			</SecondContainer>
		</StyledMainContainer>
	);
}
