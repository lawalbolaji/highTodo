import * as React from "react";
import { format } from "date-fns";
import { useTimer } from "./hooks/useTimer";

export const Clock = () => {
  const date = useTimer();
  return (
    <div className="table-cell align-middle">
      <div>
        {!!date && (
          <p className="w-fit h-fit m-auto text-3xl font-mono scale-150 font-extrabold">
            {format(date, "hh")}:{format(date, "mm")}:{format(date, "ss")} {format(date, "a")}
          </p>
        )}
      </div>
    </div>
  );
};
