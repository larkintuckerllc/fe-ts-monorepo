import { Button } from 'antd';
import { Catalog, pageLoader } from 'catalog';
import Hello from 'components/lib/Hello';
import React from 'react';

const App = () => {
  return (
    <Catalog
      title="Catalog"
      pages={[
        {
          content: pageLoader('intro.md'),
          imports: { Button, Hello },
          path: '/',
          title: 'Introduction',
        },
      ]}
    />
  );
};
export default App;
