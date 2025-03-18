import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState(null);
  console.log("useHttp call");
  const fetchData = useCallback(
    async (url, { body, headers, method }, manageData) => {
      console.log("fetchData call");
      console.log(body);
      setError(null);
      setIsLoding(true);
      try {
        const response = await fetch(url, {
          method: method ? method : "GET",
          body: body ? JSON.stringify(body) : null,
          headers: headers ? headers : {},
        });
        const data = await response.json();

        if (!response.ok) {
          console.log(response);
          throw new Error(data.error?.message || "Somthing Went error");
        }
        manageData(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoding(false);
      }
    },
    []
  );

  return { isLoding, error, fetchData };
};

export default useHttp;
