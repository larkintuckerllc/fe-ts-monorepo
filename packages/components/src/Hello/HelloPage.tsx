import { Page, ReactSpecimen } from 'catalog';
import React from 'react';
import Hello from './Hello';

const HelloPage = () => (
  <Page>
    <h2>Hello</h2>
    <ReactSpecimen>
      <Hello />
    </ReactSpecimen>
  </Page>
);
export default HelloPage;
