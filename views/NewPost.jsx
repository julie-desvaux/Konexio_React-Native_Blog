import { useState, useContext } from "react";
import { useNavigate } from "react-router-native";
import { View, TextInput, StyleSheet, Button } from "react-native";

// CONTEXT
import { UserContext } from "../App";

export default function NewPost() {
	const context = useContext(UserContext);
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = () => {
		if (title && body) {
			let post = {
				userId: context.userId,
				body,
				title,
			};
			fetch(`https://jsonplaceholder.typicode.com/posts?userId=${context.userId}`, {
				method: "POST",
				body: JSON.stringify(post),
			})
				.then((response) => response.json())
				.then((res) => {
					context.setUserPosts([...context.userPosts, { title, body }]);
					navigate("/timeline");
				});
		} else {
			setErrorMsg("Merci d'entrer un titre et un texte");
		}
	};

	return (
		<View style={styles.container}>
			<TextInput value={title} onChangeText={setTitle} placeholder="Entrez un titre" style={styles.input} />
			<TextInput
				multiline={true}
				numberOfLines={10}
				value={body}
				onChangeText={setBody}
				placeholder="Entrez un texte"
				style={styles.textArea}
			/>
			{/* {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>} */}
			<Button style={styles.button} title="Poster" onPress={handleSubmit} />
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
	textArea: {
		height: 150,
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
		marginTop: 10,
	},
});
