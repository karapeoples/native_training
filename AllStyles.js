import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
	//App Styles
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		margin: '2%',

	},
	// AddForm Styles
	otherContainer: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		margin: '2%',
		border: '3px double black',
		padding: 50,
	},

	addContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	addInput: {
		border: '2px groove black',
		borderRadius: 5,
		padding: '3%',
		margin: '2%',
	},
	listItem: {
		padding: 10,
		backgroundColor: '#ccc',
		border: '1px solid black',
		margin: '1%'
	},





})