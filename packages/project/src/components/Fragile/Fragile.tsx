import React from 'react';
import styleLess from './style.less';

const Fragile = () => (
  <div>
    <div id={styleLess.root} style={{ backgroundColor: 'black' }}>
      Fragile1
    </div>
    <div className="my_global">Fragile2</div>
  </div>
);
export default Fragile;
