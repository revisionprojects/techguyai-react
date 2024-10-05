import Cookies from 'js-cookie';

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

export const setCookie = (name: string, value: string, options: CookieOptions = {}) => {
  const defaultOptions: CookieOptions = {
    path: '/',
    secure: typeof window !== 'undefined' && window.location.protocol === 'https:',
    sameSite: 'strict',
    ...options,
  };

  Cookies.set(name, value, defaultOptions);
};

export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

export const removeCookie = (name: string, options: CookieOptions = {}) => {
  const defaultOptions: CookieOptions = {
    path: '/',
    ...options,
  };

  Cookies.remove(name, defaultOptions);
};

export const getAllCookies = (): { [key: string]: string } => {
  return Cookies.get();
};

export const clearAllCookies = () => {
  const cookies = Cookies.get();
  for (const cookie in cookies) {
    Cookies.remove(cookie);
  }
};

// Helper function to set HttpOnly cookies (requires server-side implementation)
export const setHttpOnlyCookie = async (name: string, value: string, options: CookieOptions = {}) => {
  const response = await fetch('/api/setHttpOnlyCookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, value, options }),
  });
  return response.ok;
};
