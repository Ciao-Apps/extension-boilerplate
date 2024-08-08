import React, { useState, useEffect } from 'react';
import TabPage from './TabPage';
import New from './New';

export default function Home() {
  const [activePage, setActivePage] = useState('index');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setActivePage(hash || 'index');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page based on hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page) => {
    window.location.hash = page;
  };

  return (
    <>
      {activePage === 'index' && <TabPage navigateToPage={navigateToPage} />}
      {activePage === 'new' && <New navigateToPage={navigateToPage} />}
    </>
  );
}