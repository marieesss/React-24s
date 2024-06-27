// Footer.tsx
import React, { useContext, useMemo } from 'react';
import { ChartContext } from '../../utils/context/chartContext';
import { useLocation } from 'react-router-dom';
import Button from '../atoms/Button';
const Footer: React.FC = () => {
    // Instance of chart context
  const chartContext = useContext(ChartContext);

  // get location
  const location = useLocation()

  if (!chartContext) {
    throw new Error("Footer must be used with a Chart context");
  }

  // Verify if footer is used in about page or home page
  const isHome = useMemo(
    () => !location.pathname.includes("about"),
    [location]
  );

  // retrieve function from context to update value
  const { showChart, setShowChart } = chartContext;

  const showData = () => {
    setShowChart(true);
  };
  const hideData = () => {
    setShowChart(false);
  };


  return (
    <footer>
        {(isHome && !showChart)&& <Button handleClick={showData} text='Show Chart'/>}
       {(isHome && showChart) &&  <Button handleClick={hideData} text="Remove Chart"/>}
       <a href="https://github.com/marieesss">Mon github</a>
    </footer>
  );
};

export default Footer;
