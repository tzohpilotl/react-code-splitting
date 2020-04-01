import React from 'react';

function App() {
  const data = {};

  return (
    <section>
      <div className="container">
        <h1 className="title">COVID-19</h1>
        <h2 className="subtitle">Cases by country</h2>
        <p className="content">{JSON.stringify(data)}</p>
      </div>
    </section>
  );
}

export default App;
