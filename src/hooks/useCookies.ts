import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

export const useCookies = () => {
  const [cookies, setCookies] = useState<{ [key: string]: string }>(Cookies.get());

  const setCookie = useCallback((name: string, value: string, options = {}) => {
    Cookies.set(name, value, options);
    setCookies(Cookies.get());
  }, []);

  const getCookie = useCallback((name: string) => {
    return Cookies.get(name);
  }, []);

  const removeCookie = useCallback((name: string, options = {}) => {
    Cookies.remove(name, options);
    setCookies(Cookies.get());
  }, []);

  return { cookies, setCookie, getCookie, removeCookie };
};
