import React from 'react';
import Progress from './Progress';
import { useVirusData } from './hooks';
import { worldwideURL } from './config';

const Fact = function({ fact }) {
  return <div className="column">
    <p className="is-size-6 has-text-weight-semibold has-text-centered">{fact.name}</p>
    <p className="is-size-2 has-text-centered has-text-primary">{fact.value}</p>
  </div>
}

const WorldwideFacts = function() {
  const { data } = useVirusData(worldwideURL);
  if (!data) return <Progress />;

  const {
    total_cases: totalCases,
    total_deaths: totalDeaths,
    total_recovered: totalRecovered,
    new_cases: newCases,
    new_deaths: newDeaths,
    statistic_taken_at: takenAt } = data;

  const facts = [
    {
      value: totalCases,
      name: "Total Cases"
    },
    {
      value: totalDeaths,
      name: "Total Deaths"
    },
    {
      value: totalRecovered,
      name: "Total Recovered"
    },
    {
      value: newCases,
      name: "New Cases"
    },
    {
      value: newDeaths,
      name: "New Deaths"
    }];

  return <React.Fragment>
    <div className="columns">
      {facts.map((fact, i) => <Fact key={`${fact.name}-${i}`} fact={fact} />)}
    </div>
    <p className="is-size-7 has-text-grey is-italic">{`Stats taken at ${takenAt}`}</p>
  </React.Fragment>
}

export default WorldwideFacts;