import React from 'react'
import { View, Text } from 'react-native'
import {styles} from '../AllStyles'

const GoalList = ({item}) => {
  return (
			<View style={styles.container}>
				<View style={styles.listItem}>
					<Text>{item}</Text>
				</View>
			</View>
		)
}

export default GoalList
