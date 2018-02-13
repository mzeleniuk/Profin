'use strict';

import { StackNavigator } from 'react-navigation';

import SearchPage from './components/SearchPage';
import SearchResults from './components/SearchResults';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults }
});

export default App;
