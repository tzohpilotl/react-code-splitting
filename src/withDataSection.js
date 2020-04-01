import React from 'react';

const withDataSection = function(DataComponent) {
  return function({ title, description, data }) {
    return <section className="section">
      <div className="container">
        <header style={{ marginBottom: "18px" }}>
          <h2 className="subtitle">{title}</h2>
          <p className="content">{description}</p>
        </header>

        <DataComponent data={data} />
      </div>
    </section>
  }
}

export default withDataSection;