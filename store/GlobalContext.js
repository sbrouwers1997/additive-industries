import { createContext, useState } from 'react';

const GlobalContext = createContext({
  activeCategorie: null,
  setActiveCategorie: () => {},
  blueprint: null,
  setBlueprint: () => {},
  material: null,
  setMaterial: () => {},
  printer: null,
  setPrinter: () => {},
  strategy: null,
  setStrategy: () => {},
});

export function GlobalContextProvider({ children }) {
  const [activeCategorie, setActiveCategorie] = useState(null);
  const [blueprint, setBlueprint] = useState('');
  const [material, setMaterial] = useState('');
  const [printer, setPrinter] = useState('');
  const [strategy, setStrategy] = useState('');

  const context = {
    activeCategorie,
    setActiveCategorie,
    blueprint,
    setBlueprint,
    material,
    setMaterial,
    printer,
    setPrinter,
    strategy,
    setStrategy,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContext;
