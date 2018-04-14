import { Page, ReactSpecimen } from 'catalog';
import React from 'react';
import Hello from './Hello';

declare global {
  interface Function {
    displayName?: string;
  }
}
const HelloPage = () => (
  <Page>
    <h2>Hello</h2>
    <ReactSpecimen>
      <Hello />
    </ReactSpecimen>
  </Page>
);
HelloPage.displayName = 'HelloPage';
export default HelloPage;
