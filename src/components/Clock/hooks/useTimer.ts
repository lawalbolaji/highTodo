import React from "react";

export const useTimer = () => {
  const intervalID = React.useRef<NodeJS.Timer | undefined>(undefined);
  const [date, setDate] = React.useState<Date | null>(new Date());

  React.useEffect(() => {
    intervalID.current = setInterval(() => {
      setDate(new Date());
    }, 1_000);

    return () => {
      clearInterval(intervalID.current);
    };
  }, []);

  return date;
};
