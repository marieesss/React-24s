// Footer.tsx
import React, { useContext, useMemo } from 'react';
import { ChartContext } from '../../utils/context/chartContext';
import { useLocation } from 'react-router-dom';
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
       {(isHome && !showChart)&& <button onClick={showData}>Show Chart</button>}
       {(isHome && showChart) &&  <button onClick={hideData}>Hide Chart</button>}
       <a href="">Mon github</a>
    </footer>
  );
};

export default Footer;
