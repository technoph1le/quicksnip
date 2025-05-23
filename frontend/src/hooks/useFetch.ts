import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }
        const result: T = await res.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
