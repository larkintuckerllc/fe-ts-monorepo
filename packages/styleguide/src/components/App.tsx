import { Button } from 'antd';
import { Catalog, pageLoader } from 'catalog';
import React from 'react';

const App = () => {
  return (
    <Catalog
      title="Catalog"
      pages={[
        {
          content: pageLoader('intro.md'),
          imports: { Button },
          path: '/',
          title: 'Introduction',
        },
      ]}
    />
  );
};
export default App;
