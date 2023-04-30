import { createContext, useContext, useState, useEffect } from "react";

type AppProviderProps = { children: React.ReactNode };

export type obj = {
  name: string;
  price: string;
};

type ContextValue = {
  addsOn: obj[];
  setAddsOn: React.Dispatch<React.SetStateAction<obj[]>>;
  chooseAddOn: (obj: obj) => void;
  clearAddOn: () => void;
  setPlan: React.Dispatch<React.SetStateAction<obj | null>>;
  choosePlan: (obj: obj) => void;
  clearPlan: () => void;
  plan: obj | null;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  chooseDuration: (obj: string) => void;
  clearDuration: () => void;
};

// 1
const AppContext = createContext<ContextValue>({} as ContextValue);

// 2
const AppProvider = ({ children }: AppProviderProps) => {
  const [addsOn, setAddsOn] = useState<obj[]>([]);
  const [plan, setPlan] = useState<obj | null>(null);
  const [duration, setDuration] = useState("Monthly");

  // STEP3 ADDSON SETTINGS
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

  // STEPS2 PLAN SETTING
  useEffect(() => {
    const plan = localStorage.getItem("plans");
    if (plan) {
      setPlan(JSON.parse(plan));
    }
  }, []);

  const choosePlan = (obj: obj) => {
    setPlan(obj);
    localStorage.setItem("plans", JSON.stringify(obj));
  };

  const clearPlan = () => {
    setPlan(null);
    localStorage.removeItem("plans");
  };

  // Duration Setting
  useEffect(() => {
    const duration = localStorage.getItem("durations");
    if (duration) {
      setDuration(JSON.parse(duration));
    }
  }, []);

  const chooseDuration = (value: string) => {
    setDuration(value);
    localStorage.setItem("durations", JSON.stringify(value));
  };

  const clearDuration = () => {
    setDuration("Monthly");
    localStorage.removeItem("durations");
  };

  console.log(duration);

  return (
    <AppContext.Provider
      value={{
        addsOn,
        setAddsOn,
        chooseAddOn,
        clearAddOn,
        choosePlan,
        setPlan,
        plan,
        clearPlan,
        duration,
        setDuration,
        chooseDuration,
        clearDuration,
      }}
    >
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
