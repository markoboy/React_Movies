import React from 'react';

function SiteContainerComponent({ children }) {
  return (
    <main className="site-container__main flex flex--column">{children}</main>
  );
}

export default SiteContainerComponent;
