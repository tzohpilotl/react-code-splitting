import React from 'react';

function App() {
  const countryData = {};
  const worldData = {};

  return (
    <div className="container">
      <section className="section">
        <h1 className="title">COVID-19</h1>
      </section>

      <section className="section">
        <div className="container">
          <header>
            <h2 className="subtitle">Cases by country</h2>
            <p className="content">Various information about the virus by country</p>
          </header>
          <p className="content">{JSON.stringify(countryData)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header>
            <h2 className="subtitle">World total stat</h2>
            <p className="content">A summary about the virus worldwide</p>
          </header>
          <p className="content">{JSON.stringify(worldData)}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
