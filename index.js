/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TennisApp2 from './src/TennisApp2';
import TennisApp1 from './src/TennisApp1';

AppRegistry.registerComponent(appName, () => TennisApp2);

