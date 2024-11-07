// React StackNavigator (different from Drawer and BottomNav) - look at her notes!

import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import our screens for our route mapping
import SearchScreen from "./src/screens/SearchScreen";

// the first object is all our routes
// second arg another object for configuration
const navigator = createStackNavigator({
    Search: SearchScreen,
  }, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
    // if we x configure this, everyone gets title of ...
  }
)

export default createAppContainer(navigator)
