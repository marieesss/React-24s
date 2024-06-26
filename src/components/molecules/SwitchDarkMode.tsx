import { useTheme } from '../../utils/hooks/useTheme';
import { themes } from '../../configs/themeConfigs';
import Switch from '../atoms/Switch';
import sun from "../../ressources/sun.svg";
import styles from "../../styles/switchDarkMode.module.css"
import moon from "../../ressources/moon.svg";


// Render switch that handle light/dark mode
const SwitchDarkMode = () => {
  const [theme, handleChange] = useTheme(themes.darkTheme);
  return (
    <div className={styles.justifyContent}>
    <img  className={styles.svg} src={sun} width={20}/>
    <Switch handleChange={handleChange} value={theme} valueToBeChecked={themes.darkTheme}/>
    <img  className={styles.svg} src={moon} width={20}/>
    </div>
  )
}

export default SwitchDarkMode
