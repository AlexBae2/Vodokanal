import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SectionInner } from '../../App.js'
import { fetchAllPosts, fetchPosts } from '../../store/reducers/posts/thunks/index.js'
import Post from './Post/Post.js'
import PostsSkeleton from './PostsSkeleton/PostsSkeleton.js'
import { Grid, MainLayoutSection } from './styles.js'

const Posts = () => {
	const dispatch = useDispatch()
	const [currentPage,setCurrentPage] = useState(1)
	const lastElement = useRef(null)
	const observer = useRef(null)
	const { posts, isLoading, countPages } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(fetchAllPosts())
	},[])

	useEffect(() => {
		if(isLoading) return
		if(observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver((entries) => {
			if(entries[0].isIntersecting){
				countPages > currentPage ? setCurrentPage(currentPage + 1) : null
			}
		})
		observer.current.observe(lastElement.current)
	},[isLoading])
	
	useEffect(() => {
		dispatch(fetchPosts({currentPage}))
	}, [currentPage])

	return (
		<MainLayoutSection>
			<SectionInner>
				<Grid>
					{posts.map((u) => <Post key={u.id} body={u.body} title={u.title} ></Post>)}
					<PostsSkeleton isLoading={isLoading}/>
				</Grid>
			</SectionInner>
			{<div ref={lastElement} style={{height:40, width:1}}></div>}
		</MainLayoutSection>
	)
}

export default Posts
