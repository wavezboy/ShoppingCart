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

// 1
const AppContext = createContext<ContextValue>({} as ContextValue);

// 2
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

// 3

export const useAppContext = () => {
  return useContext(AppContext);
};

// 4
export default AppProvider;
