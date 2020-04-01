import React from 'react';
import DataSection from './DataSection';

function App() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="title">COVID-19</h1>
      </section>

      <DataSection />
      <DataSection />
    </div>
  );
}

export default App;
