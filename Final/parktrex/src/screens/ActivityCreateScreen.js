import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import ParkForm from '../components/ParkForm'
import {Context} from '../context/ParkContext'

const CreateScreen = ({navigation}) => {
  const {addPark} = useContext(Context)

  return (
    <ParkForm
      onSubmit={(title, content, rating) => {
        addPark(title, content, rating, () => {
          navigation.navigate('Favorites')
        }
      )
    }}
    />
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
