import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";

const HomePage = () => {
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [loading, setLoading] = useState(true);
	const showToast = useShowToast();
	useEffect(() => {
		const getFeedPosts = async () => {
			setLoading(true);
			setPosts([]);
			try {
				const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3001"}/api/posts/feed`, {
					credentials: "include"
				});
				
				if (res.status === 401) {
					// User is not authenticated, clear localStorage and redirect to login
					localStorage.removeItem("user-threads");
					showToast("Error", "Please log in to view your feed", "error");
					return;
				}
				
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				console.log(data);
				setPosts(data);
			} catch (error) {
				if (error.message.includes("401")) {
					// Handle unauthorized access gracefully
					showToast("Authentication Required", "Please log in to view your feed", "error");
				} else {
					showToast("Error", error.message || "An error occurred", "error");
				}
			} finally {
				setLoading(false);
			}
		};
		
		// Only fetch feed posts if user is authenticated
		const user = JSON.parse(localStorage.getItem("user-threads"));
		if (user && user._id) {
			getFeedPosts();
		} else {
			setLoading(false);
			showToast("Info", "Please log in to view your feed", "info");
		}
	}, [showToast, setPosts]);

	return (
		<Flex gap='10' alignItems={"flex-start"}>
			<Box flex={70}>
				{!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}

				{loading && (
					<Flex justify='center'>
						<Spinner size='xl' />
					</Flex>
				)}

				{posts.map((post) => (
					<Post key={post._id} post={post} postedBy={post.postedBy} />
				))}
			</Box>
			<Box
				flex={30}
				display={{
					base: "none",
					md: "block",
				}}
			>
				<SuggestedUsers />
			</Box>
		</Flex>
	);
};

export default HomePage;
