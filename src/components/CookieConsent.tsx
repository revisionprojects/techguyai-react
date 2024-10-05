import React, { useState, useEffect } from 'react';
import { useCookies } from '../hooks/useCookies';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { setCookie, getCookie } = useCookies();

  useEffect(() => {
    // Check if the consent cookie exists
    const consentCookie = getCookie('cookieConsent');
    if (consentCookie !== 'true') {
      setShowConsent(true);
    }
  }, [getCookie]);

  const acceptCookies = () => {
    setCookie('cookieConsent', 'true', { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="cookie-consent-modal">
      <div className="cookie-consent-content">
        <h2>This website uses cookies</h2>
        <p>We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
        <button onClick={acceptCookies}>Accept All</button>
      </div>
    </div>
  );
};

export default CookieConsent;
