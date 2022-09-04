import React from "react";
import Auth from "../components/Auth/Auth.js";
import Posts from "../components/Posts/Posts.js";

export const mainRoutes = () => {
	return [
		{
			path: "/",
			children: [
				{
					path: "posts",
					element: <Posts />,
				},
				{
					path: "auth",
					element: <Auth />,
				},
			],
		},
	];
};
