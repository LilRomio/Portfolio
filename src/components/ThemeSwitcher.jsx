import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import { ColorModeContext } from '../theme';

const ThemeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ColorModeContext);
  return (
    <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? <LightModeOutlinedIcon /> : <NightlightRoundOutlinedIcon />}
    </IconButton>
  );
};

export default ThemeSwitcher;
