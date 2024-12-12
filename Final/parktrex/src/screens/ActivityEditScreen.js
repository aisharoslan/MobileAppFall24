import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import ParkForm from '../components/ParkForm'
import {Context} from '../context/ParkContext'

const ActivityEditScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state, editPark} = useContext(Context)
  const park = state.find(
    (park) => park.id === navigation.getParam('id')
  )

  return (
    <ParkForm
      initialValues={{title: park.title, content: park.content, rating: park.rating}}
      onSubmit={(title, content, rating) => {
        editPark(id, title, content, rating, () =>
          navigation.navigate('Favorites')
        )
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default ActivityEditScreen
