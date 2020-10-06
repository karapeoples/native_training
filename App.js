import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {styles} from './AllStyles'
import Form from './components/AddForm'


const App = () => {


	return (
		<SafeAreaView style={styles.container}>
			<Form/>
		</SafeAreaView>
	)
}

export default App
