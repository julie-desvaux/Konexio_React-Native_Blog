import { useState, createContext } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";

// CONTEXT
export const UserContext = createContext();

// VIEWS
import Login from "./views/Login";
import Timeline from "./views/Timeline";
import Profile from "./views/Profile";
import NewPost from "./views/NewPost";

// COMPONENTS
import Navbar from "./components/Navbar";

export default function App() {
	const [isLogged, setIsLogged] = useState(false);
	const [userId, setUserId] = useState(null);
	const [userData, setUserData] = useState({});
	const [userPosts, setUserPosts] = useState([]);

	const value = {
		isLogged,
		setIsLogged,
		userId,
		setUserId,
		userData,
		setUserData,
		userPosts,
		setUserPosts,
	};

	return (
		<UserContext.Provider value={value}>
			<NativeRouter>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/timeline" element={<Timeline />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/newpost" element={<NewPost />} />
				</Routes>
				{isLogged && <Navbar />}
			</NativeRouter>
		</UserContext.Provider>
	);
}
