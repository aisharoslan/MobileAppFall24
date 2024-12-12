import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ParkViewScreen from './src/screens/ParkViewScreen'
import FavoriteScreen from './src/screens/FavoriteScreen'
import ActivityViewScreen from './src/screens/ActivityViewScreen'
import ActivityCreateScreen from './src/screens/ActivityCreateScreen'
import ActivityEditScreen from './src/screens/ActivityEditScreen'
import { Provider } from './src/context/ParkContext'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ParkView: ParkViewScreen,
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        title: 'Favorites',
      },
    },
    ActivityView: ActivityViewScreen,
    ActivityCreate: ActivityCreateScreen,
    ActivityEdit: ActivityEditScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'ParkTrex',
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}