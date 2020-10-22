import React from 'react'
import { View, TextInput, Button } from 'react-native'
import {styles} from '../AllStyles'

const GoalInput = ({handler, newGoal, addHandler }) => {
  return (
			<View style={styles.addContainer}>
				<TextInput placeholder='Add A Goal' style={styles.addInput} onChangeText={handler} value={newGoal} />
				<Button title='  +  ' onPress={addHandler} />
			</View>
		)
}

export default GoalInput
