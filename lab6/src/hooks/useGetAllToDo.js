import { useState, useEffect } from "react";
import useLoading from "./useLoading";

export const useGetAllToDo = () => {
  const [error, setError] = useState(null);
  const [toDos, setToDos] = useState([]);
  
  const {loading, setLoading} = useLoading();


  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setToDos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, toDos, setToDos };
};
