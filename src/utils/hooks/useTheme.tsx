import { useEffect, useState } from 'react';
import { Theme } from '../../types/Theme';
import { ChangeEvent } from '../../types/Html';
import { themes } from '../../configs/themeConfigs';


type useThemeReturn = [ string, (e: ChangeEvent) => void ];

export const useTheme = (initialTheme:Theme): useThemeReturn => {

    const [theme, setTheme] = useState<Theme>(initialTheme)

    const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? themes.darkTheme : themes.lightTheme)

    useEffect(() => {
        console.log(theme)
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleChange]
}