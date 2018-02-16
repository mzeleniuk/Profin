'use strict';

import { StackNavigator } from 'react-navigation';

import SearchPage from './components/SearchPage';
import SearchResults from './components/SearchResults';
import PropertyView from './components/PropertyView';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Property: { screen: PropertyView }
});

export default App;
