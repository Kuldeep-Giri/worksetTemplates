import { useState } from 'react';


const useToggle = () => {
  const [Header, setHeader] = useState(true);
  const [serviceSec1,setServiceSec1] = useState(true)
  const [serviceSec2,setServiceSec2] = useState(true)


  return {
    Header,
    serviceSec1,
    serviceSec2
  
  };
};

export default useToggle;