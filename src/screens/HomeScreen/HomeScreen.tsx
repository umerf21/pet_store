import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import PetListing from '../../components/PetListing/PetListing'
import { pets } from '../../mock/petsData';

type Props = {}


const HomeScreen = (props: Props) => {
    
  return (
  
    <View style={styles.container}>
        <PetListing pets={pets}/>
    </View>
  
  )
}

export default HomeScreen
