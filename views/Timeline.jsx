import { useContext } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";

// CONTEXT
import { UserContext } from "../App";

// COMPONENTS
import Post from "../components/Post";

export default function Timeline() {
	const context = useContext(UserContext);

	return (
		<SafeAreaView style={styles.homeView}>
			<View style={styles.homeContent}>
				<Text style={styles.title}>Timeline</Text>

				<FlatList
					style={{ padding: 20 }}
					data={context.userPosts}
					renderItem={(data) => (
						<Post title={data.item.title} body={data.item.body} user={context.userData} />
					)}
					keyExtractor={(_data, i) => i.toString()}
					ListHeaderComponent={() => <Text>Voici vos dernier posts</Text>}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	homeView: {
		backgroundColor: "#F0F2F5",
		paddingBottom: 20,
		marginBottom: 40,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		padding: 10,
		textAlign: "center",
		marginTop: 20,
	},

	homeContent: {
		marginTop: 20,
	},
});
