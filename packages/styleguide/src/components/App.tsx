import { Catalog } from 'catalog';
import HelloPage from 'components/lib/HelloPage';
import React from 'react';

const App = () => {
  return (
    <Catalog
      title="Catalog"
      pages={[
        {
          content: HelloPage,
          path: '/',
          title: 'Hello Page',
        },
      ]}
    />
  );
};
export default App;
