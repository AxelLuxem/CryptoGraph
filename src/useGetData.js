import { useState, useRef, useEffect } from "react";

function useGetData() {
  const initialised = useRef(false);
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;
      console.log("done");

      const d = [];
      for (let i = 0; i <= 7; i++) {
        console.log(`This is i: ${i}`);
        d.push(i);
      }

      setDays(d);
    }
  }, [setDays]);

  return days;
}

export default useGetData;
