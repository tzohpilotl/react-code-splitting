import { useState, useEffect } from 'react';
import { getVirusData } from './helpers';

const useVirusData = function(url) {
  const [data, setData] = useState({});

  useEffect(function() {
    getVirusData(url, setData);
  }, []);

  return { data };
}

export { useVirusData };