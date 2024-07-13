import React from 'react';
import AccoridanContainer from './containers/accordian';
import FooterContainer from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

const App = () => {
  return (<>
    <JumbotronContainer />
    <AccoridanContainer />
    <FooterContainer />
  </>);
}

export default App;
