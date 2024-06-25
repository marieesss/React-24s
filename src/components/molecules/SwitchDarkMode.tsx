import React from 'react'
import { useTheme } from '../../utils/hooks/useTheme';
import { themes } from '../../configs/themeConfigs';
import Switch from '../atoms/Switch';

const SwitchDarkMode = () => {
  const [theme, handleChange] = useTheme(themes.darkTheme);
  return (
    <Switch text="dark mode" handleChange={handleChange} value={theme} valueToBeChecked={themes.darkTheme}/>
  )
}

export default SwitchDarkMode
