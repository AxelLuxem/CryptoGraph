import { useState, useRef, useEffect } from "react";
import axios from "axios";

const callAPI = async (date) => {
  const url = `https://marketdata.tradermade.com/api/v1/historical?currency=BTCUSD&date=${date}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  try {
    const value = await axios.get(url);
    return { date, value: value.data.quotes[0].close };
  } catch (err) {
    console.log(err);
  }
};

const getTwoDigits = (value) => {
  const valueString = value.toString();
  if (valueString.length === 1) return `0${valueString}`;
  return valueString;
};

const useGetData = () => {
  const initialised = useRef(false);
  const [days, setDays] = useState([]);

  const makeCallAPI = async (newDate) => {
    let data = await callAPI(newDate);
    setDays((prev) => {
      const unSorted = [...prev, data];
      const sorted = unSorted.sort((a, b) =>
        a.date > b.date ? 1 : -1
      );
      return sorted;
    });
  };

  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;

      for (let i = 0; i < 7; i++) {
        const date = new Date(
          new Date().getTime() - i * 24 * 60 * 60 * 1000
        );

        const year = date.getFullYear();
        const month = getTwoDigits(date.getMonth() + 1);
        const day = getTwoDigits(date.getDate());
        const newDate = `${year}-${month}-${day}`;

        console.log(newDate);
        makeCallAPI(newDate);
      }
    }
  }, [setDays, makeCallAPI]);

  return days;
};

export default useGetData;
