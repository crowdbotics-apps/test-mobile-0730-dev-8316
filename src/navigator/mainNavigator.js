import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen89615Navigator from '../features/BlankScreen89615/navigator';
import BlankScreen79588Navigator from '../features/BlankScreen79588/navigator';
import BlankScreen79587Navigator from '../features/BlankScreen79587/navigator';
import BlankScreen19556Navigator from '../features/BlankScreen19556/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen89615: { screen: BlankScreen89615Navigator },
BlankScreen79588: { screen: BlankScreen79588Navigator },
BlankScreen79587: { screen: BlankScreen79587Navigator },
BlankScreen19556: { screen: BlankScreen19556Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
