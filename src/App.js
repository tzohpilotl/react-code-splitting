import React from 'react';
import DataSection from './DataSection';
import { useVirusData } from './hooks';
import { byCountryURL, worldwideURL } from './config';

function App() {
  const { data: byCountryData } = useVirusData(byCountryURL);
  const { data: worldwideData } = useVirusData(worldwideURL);

  return (
    <div className="container">
      <section className="section">
        <h1 className="title">COVID-19</h1>
      </section>

      <DataSection
        title="Cases by country"
        description="Various information about the virus by country"
        data={byCountryData}
      />
      <DataSection
        title="World total stat"
        description="A summary about the virus worldwide"
        data={worldwideData}
      />
    </div>
  );
}

export default App;
