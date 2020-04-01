import React from 'react';

const DataSection = function() {
  const data = {};

  return <section className="section">
    <div className="container">
      <header>
        <h2 className="subtitle">Cases by country</h2>
        <p className="content">Various information about the virus by country</p>
      </header>
      <p className="content">{JSON.stringify(data)}</p>
    </div>
  </section>
}

export default DataSection;