'use strict';

import { StackNavigator } from 'react-navigation';

import SearchPage from './components/SearchPage';

const App = StackNavigator({
  Home: { screen: SearchPage }
});

export default App;
