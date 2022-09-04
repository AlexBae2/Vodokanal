import React from "react";
import ContentLoader from "react-content-loader";

const PostSkeleton = (props) => (
	<ContentLoader
		speed={2}
		width={470}
		height={390}
		viewBox="0 0 470 390"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="4" y="3" rx="0" ry="0" width="468" height="386" />
	</ContentLoader>
);

export default PostSkeleton;
