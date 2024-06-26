import React, { createContext, useState, ReactNode } from 'react';

interface ChartContextProps {
  showChart: boolean;
  setShowChart: (show: boolean) => void;
}

export const ChartContext = createContext<ChartContextProps | undefined>(undefined);

export const ChartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showChart, setShowChart] = useState(false);

  return (
    <ChartContext.Provider value={{ showChart, setShowChart }}>
      {children}
    </ChartContext.Provider>
  );
};
