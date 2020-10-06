import React, {useState} from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import {styles} from '../AllStyles'

const Form = () => {
  const [newGoal, setNewGoal] = useState('')
  const [goals, setGoals] = useState([])

  const handler = (newGoal) => {
    setNewGoal(newGoal)
  }

  const addHandler = () => {
    setGoals([...goals, newGoal])
  }
  return (
			<View style={styles.container}>
				<View style={styles.addContainer}>
					<TextInput placeholder='Add A Goal' style={styles.addInput} onChangeText={handler} value={newGoal} />
					<Button title='  +  ' onPress={addHandler} />
				</View>
        <View style={styles.container}>
        {goals.map((goal, index) => <Text key={index}>{goal}</Text>)}
        </View>
			</View>
		)
}

export default Form
