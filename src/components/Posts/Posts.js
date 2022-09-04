import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SectionInner } from "../../App.js";
import { fetchPosts } from "../../utils/api/routes/posts/thunks/index.js";
import Post from "./Post/Post.js";
import PostsSkeleton from "./PostsSkeleton.js";
import { Grid, MainLayoutSection } from "./styles.js";

const Posts = () => {
	const dispatch = useDispatch();
	const { posts, isLoading, error } = useSelector((state) => state.posts);
	useEffect(() => {
		dispatch(fetchPosts());
	}, []);
	debugger;
	return (
		<MainLayoutSection>
			<SectionInner>
				<Grid>
					{isLoading
						? [...Array(4).keys()].map((u) => <PostsSkeleton key={u.id} />)
						: posts.map((u) => <Post key={u.id}></Post>)}
				</Grid>
			</SectionInner>
		</MainLayoutSection>
	);
};

export default Posts;
