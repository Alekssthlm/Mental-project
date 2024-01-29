import { useEffect, useState } from "react";

// TO CALL THE HOOK IN YOUR COMPONENT:
// const { data, isLoading, isError } = useFetch(url)

export default function useFetch(url) { 
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setData(undefined);
    const controller = new AbortController
    fetch(url, {signal: controller.signal})
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch(e => {
        if(e?.name === 'AbortError') return
        setError(e);
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setLoading(false);
      });

      return () => {
        controller.abort()
      }
  }, [url]);

  return {data, isLoading: loading, isError: error}
}
