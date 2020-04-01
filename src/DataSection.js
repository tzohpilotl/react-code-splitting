import React from 'react';

const DataSection = function({ title, description, data }) {
  return <section className="section">
    <div className="container">
      <header>
        <h2 className="subtitle">{title}</h2>
        <p className="content">{description}</p>
      </header>
      <p className="content">{JSON.stringify(data)}</p>
    </div>
  </section>
}

export default DataSection;