import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import LinkCreate from  './components/linkCreate';
import { Links } from '../imports/collections/links';
import LinkList from './components/linkList';

const App = () => {
  return(
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  );
};

Meteor.startup(() => {
  ReactDom.render(<App />, document.querySelector('.container'));
});
