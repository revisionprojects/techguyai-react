import { useState, useCallback } from 'react';
import * as cookieUtils from '../utils/cookieUtils';

export const useCookies = () => {
  const [cookies, setCookies] = useState<{ [key: string]: string }>(cookieUtils.getAllCookies());

  const updateCookies = useCallback(() => {
    setCookies(cookieUtils.getAllCookies());
  }, []);

  const setCookie = useCallback((name: string, value: string, options = {}) => {
    cookieUtils.setCookie(name, value, options);
    updateCookies();
  }, [updateCookies]);

  const getCookie = useCallback((name: string) => {
    return cookieUtils.getCookie(name);
  }, []);

  const removeCookie = useCallback((name: string, options = {}) => {
    cookieUtils.removeCookie(name, options);
    updateCookies();
  }, [updateCookies]);

  const clearAllCookies = useCallback(() => {
    cookieUtils.clearAllCookies();
    updateCookies();
  }, [updateCookies]);

  return {
    cookies,
    setCookie,
    getCookie,
    removeCookie,
    clearAllCookies,
  };
};
