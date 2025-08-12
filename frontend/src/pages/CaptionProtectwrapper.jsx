import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptionDatacontext } from '../context/CaptionContext';

const CaptionProtectwrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setcaption } = useContext(CaptionDatacontext);
  const [loading, setLoading] = useState(true); // wait until token check is done

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/caption-login');
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/caption/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(res.data.caption)
        
         if ([201, 202, 203, 204, 205].includes(res.status)) {
          setcaption(res.data.caption);

          console.log(res);
        }

       
      } catch (err) {
        console.log(err);
        localStorage.removeItem('token');
        navigate('/caption-login');
      } finally {
        setLoading(false); // finished checking
      }
    };

    setTimeout(()=>{
      checkAuth();
    },300)
  }, [navigate, setcaption]);

  if (loading) {
    return <div>Loading...</div>; // Show loading instead of redirecting too early
  }

  return <>{children}</>;
};

export default CaptionProtectwrapper;
