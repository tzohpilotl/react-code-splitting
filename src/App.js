import React from 'react';
import TableByCountry from './TableByCountry';
import WorldwideFacts from './WorldwideFacts';
import withDataSection from './withDataSection';
import { useVirusData } from './hooks';
import { byCountryURL, worldwideURL } from './config';

function App() {
  const { data: byCountryData } = useVirusData(byCountryURL);
  const { data: worldwideData } = useVirusData(worldwideURL);

  const ByCountrySection = withDataSection(TableByCountry);
  const WorldwideSection = withDataSection(WorldwideFacts);

  return (
    <div className="container">
      <section className="section" style={{ paddingBottom: "0px" }}>
        <h1 className="title">COVID-19</h1>
      </section>

      <WorldwideSection
        title="World total stat"
        description="A summary about the virus worldwide"
        data={worldwideData}
      />

      <ByCountrySection
        title="Cases by country"
        description="Various information about the virus by country"
        data={byCountryData}
      />
    </div>
  );
}

export default App;
