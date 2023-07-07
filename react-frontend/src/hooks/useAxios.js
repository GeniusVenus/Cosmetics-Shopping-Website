import { useState, useEffect } from "react";

const useAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [controller, setController] = useState();
  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;
    try {
      setLoading(true);
      const control = new AbortController();
      setController(control);
      const response = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: control.signal,
      });
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };
  useEffect(() => {
    console.log(controller);
    return () => controller && controller.abort();
  }, [controller]);

  return [data, error, loading, axiosFetch];
};
export default useAxios;
