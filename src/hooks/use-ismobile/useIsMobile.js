import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    const mobileDevices = [
      /Android/i,
      /BlackBerry/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /Opera Mini/i,
      /IEMobile/i,
      /WPDesktop/i,
    ]

    setIsMobile(mobileDevices.some((mobileDevice) => {
      return navigator.userAgent.match(mobileDevice);
    }))
  }

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return {
    isMobile,
  }
}