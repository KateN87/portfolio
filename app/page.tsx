import { StyledMainContainer } from './page.styled';
import { Header } from './ui/header/Header';

export default function Home() {
	return (
		<StyledMainContainer>
			<div className='description'>
				<Header />
			</div>
		</StyledMainContainer>
	);
}
