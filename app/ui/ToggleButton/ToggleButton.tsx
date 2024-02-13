import { ThemeContext } from '@/app/ThemeContext';
import { useContext, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
	StyledToggleContainer,
	StyledToggleThumb,
	StyledToggleTrack,
} from './ToggleButton.styled';

const ToggleButton = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isActive, setIsActive] = useState(false);

	const toggleHandler = () => {
		toggleTheme();
		setIsActive(!isActive);
	};

	return (
		<StyledToggleContainer>
			<StyledToggleTrack onClick={toggleHandler} isActive={isActive}>
				<StyledToggleThumb isActive={isActive} />
			</StyledToggleTrack>
			{theme === 'light' ? (
				<FaSun className='icon' />
			) : (
				<FaMoon className='icon' />
			)}
		</StyledToggleContainer>
	);
};

export default ToggleButton;
