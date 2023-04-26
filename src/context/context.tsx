import { createContext, useContext, useState, useEffect } from "react";

type AppProviderProps = { children: React.ReactNode };

type obj = {
  name: string;
  price: string;
};

type ContextValue = {
  addsOn: obj[];
  setAddsOn: React.Dispatch<React.SetStateAction<obj[]>>;
  chooseAddOn: (obj: obj) => void;
  clearAddOn: () => void;
};

const AppContext = createContext<ContextValue>({} as ContextValue);

const AppProvider = ({ children }: AppProviderProps) => {
  const [addsOn, setAddsOn] = useState<obj[]>([]);

  useEffect(() => {
    const addsOn = localStorage.getItem("addon");
    if (addsOn) {
      setAddsOn(JSON.parse(addsOn));
    }
  }, []);

  const chooseAddOn = (obj: obj) => {
    const newAddsOn = [...addsOn, obj];

    setAddsOn(newAddsOn);
    localStorage.setItem("addon", JSON.stringify(newAddsOn));
  };

  const clearAddOn = () => {
    setAddsOn([]);
    localStorage.removeItem("addon");
  };

  return (
    <AppContext.Provider value={{ addsOn, setAddsOn, chooseAddOn, clearAddOn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
