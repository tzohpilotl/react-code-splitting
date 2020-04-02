import React from 'react';
import Progress from './Progress';
import { useVirusData } from './hooks';
import { byCountryURL } from './config';

const TableByCountry = function() {
  const { data } = useVirusData(byCountryURL);
  if (!data) return <Progress />;

  const byCountryData = data.countries_stat ? data.countries_stat.slice(0, 5) : [];

  return <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>Country</th>
        <th>Cases</th>
        <th>Deaths</th>
        <th>Total Recovered</th>
      </tr>
    </thead>
    <tbody>
      {byCountryData.map((data, i) => <tr key={`${data.country_name}-${i}`}>
        <th>{i + 1}</th>
        <td>{data.country_name}</td>
        <td>{data.cases}</td>
        <td>{data.deaths}</td>
        <td>{data.total_recovered}</td>
      </tr>)}
    </tbody>
  </table>
}

export default TableByCountry;