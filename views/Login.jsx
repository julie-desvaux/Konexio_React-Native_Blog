import { useState, useContext } from "react";
import { useNavigate } from "react-router-native";
import { View, TextInput, StyleSheet, Button } from "react-native";

// CONTEXT
import { UserContext } from "../App";

export default function Login() {
	const context = useContext(UserContext);
	const navigate = useNavigate();

	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = () => {
		if (context.userId >= 1 && context.userId <= 10) {
			fetch(`https://jsonplaceholder.typicode.com/posts?userId=${context.userId}`)
				.then((response) => response.json())
				.then((res) => {
					context.setUserPosts(res);
					context.setIsLogged(true);
				});
			fetch(`https://jsonplaceholder.typicode.com/users/${context.userId}`)
				.then((response) => response.json())
				.then((res) => {
					context.setUserData(res);
					navigate("/timeline");
				});
		} else {
			setErrorMsg("Merci de selectionner un id entre 1 et 10");
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				value={context.userId}
				onChangeText={context.setUserId}
				placeholder="Enter an id"
				style={styles.input}
				keyboardType="numeric"
			/>
			{/* {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>} */}
			<Button style={styles.button} title="Login" onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		height: 40,
		width: "80%",
		backgroundColor: "lightgrey",
		padding: 10,
		marginBottom: 10,
	},
	errorMsg: {
		color: "crimson",
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		marginTop: 40,
	},
});
