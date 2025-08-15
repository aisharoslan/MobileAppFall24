import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import ParkForm from '../components/ParkForm'
import { Context } from '../context/ParkContext'

const ActivityEditScreen = ({ navigation, id }) => {
  const { state, editPark } = useContext(Context)
  const park = state.find((park) => park.id === id)

  return (
    <ParkForm
      initialValues={{ title: park?.title || '', content: park?.content || '', rating: park?.rating || 0 }}
      onSubmit={(title, content, rating) => {
        editPark(id, title, content, rating, () => {
          // Navigate back to main screen and switch to favorites tab
          if (navigation.goBack) {
            navigation.goBack();
          }
        })
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default ActivityEditScreen
