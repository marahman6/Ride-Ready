import React, {useEffect, useState} from 'react';

const DataFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
};

export default DataFetch;
