import React, { Suspense } from 'react';
import Progress from './Progress';

const withDataSection = function(componentFile) {
  const DataComponent = React.lazy(() => import('./' + componentFile));

  const WithDataSection = function({ title, description }) {
    return (
      <Suspense fallback={<Progress />}>
        <section className="section">
          <div className="container">
            <header style={{ marginBottom: "18px" }}>
              <h2 className="subtitle">{title}</h2>
              <p className="content">{description}</p>
            </header>
          </div>
          <DataComponent />
        </section>
      </Suspense>
    );
  }

  WithDataSection.displayName = `WithDataSection(${componentFile.name})`;

  return WithDataSection;
}

export default withDataSection;