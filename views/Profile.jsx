import { useContext } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

// CONTEXT
import { UserContext } from "../App";

export default function Profile() {
	const context = useContext(UserContext);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Profil</Text>
			<Text style={styles.username}>Nom d'utilisateur : {context.userData.name}</Text>
			<Text style={styles.posts}>Nombre de Posts : {context.userPosts.length}</Text>
			<Text style={styles.posts}>Username : {context.userData.username}</Text>
			<Text style={styles.posts}>Email : {context.userData.email}</Text>
			<Text style={styles.posts}>Phone : {context.userData.phone}</Text>
			<Text style={styles.posts}>Website : {context.userData.website}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},

	title: {
		fontSize: 40,
		margin: 30,
		fontWeight: "bold",
	},

	username: {
		fontSize: 20,
		margin: 5,
		backgroundColor: "rgba(151, 10, 10, 1)",
		color: "white",
		padding: 10,
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 10,
		overflow: "hidden",
	},

	posts: {
		fontSize: 20,
		margin: 5,
		color: "rgba(151, 10, 10, 1)",
	},
});
