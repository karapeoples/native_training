import React, { useState } from 'react'
import { View, TextInput, Button, FlatList } from 'react-native'
import { styles } from '../AllStyles'
import GoalList from './GoalList'
import GoalInput from './GoalInput'

const Form = () => {
	const [newGoal, setNewGoal] = useState('')
	const [goals, setGoals] = useState([])

	const handler = (newGoal) => {
		setNewGoal(newGoal)
	}

	const addHandler = () => {
		setGoals([...goals, {key: Math.random().toString(), value: newGoal}])
	}
	return (
		<View style={styles.otherContainer}>
			<GoalInput handler={handler} newGoal={newGoal} addHandler={addHandler}/>

			<FlatList
				keyExtractor={(item, index) => item.key}
				data={goals}
				renderItem={(itemData) => <GoalList item={itemData.item.value} />}
			/>
		</View>
	)
}

export default Form
