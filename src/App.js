import React from 'react';
import withDataSection from './withDataSection';

const WorldwideSection = withDataSection('WorldwideFacts');
const ByCountrySection = withDataSection('TableByCountry');

function App() {
  return (
    <div className="container">
      <section className="section" style={{ paddingBottom: "0px" }}>
        <h1 className="title">COVID-19</h1>
      </section>

      <WorldwideSection
        title="World total stat"
        description="A summary about the virus worldwide"
      />
      <ByCountrySection
        title="Cases by country"
        description="Various information about the virus by country"
      />
    </div>
  );
}

export default App;
