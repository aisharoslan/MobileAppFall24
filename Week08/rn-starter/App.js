import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TutorialScreen from "./src/screens/TutorialScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    // kind of like routes and links with react router dom, so here we list all components that should be rendered
    Home: HomeScreen,
    Tutorial: TutorialScreen,
    Lists: ListScreen,
  },
  {
    // initialRouteName: "Home",
    // initialRouteName: "Tutorial",
    initialRouteName: "Lists",
    defaultNavigationOptions: {
      title: "App", // name of App - title at the top
    },
  }
);

export default createAppContainer(navigator);
