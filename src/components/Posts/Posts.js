import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllData,
  fetchPosts,
} from '../../store/reducers/posts/thunks/index.js';
import Post from './Post/Post.js';
import PostsSkeleton from './PostsSkeleton/PostsSkeleton.js';
import { Grid, MainLayoutSection } from './styles.js';
import { SectionInner } from '../../App.styles.js';

const Posts = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, users, photos, isLoading, countPages } = useSelector(
    (state) => state.posts
  );
  const lastElement = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        countPages > currentPage
          ? setCurrentPage((prevState) => prevState + 1)
          : null;
      }
    });
    observer.current.observe(lastElement.current);
  }, [isLoading]);
  useEffect(() => {
    dispatch(fetchPosts({ currentPage }));
  }, [currentPage]);
  useEffect(() => {
    dispatch(fetchAllData());
  }, []);
  return (
    <MainLayoutSection>
      <SectionInner>
        <Grid>
          {!isLoading
            ? posts.map((post) => (
                <Post
                  key={post.id}
                  userData={users.find((user) => user.id === post.userId)}
                  photo={photos.find((photo) => photo.albumId === post.userId)}
                  body={post.body}
                  title={post.title}
                ></Post>
              ))
            : null}
          <PostsSkeleton isLoading={isLoading} />
        </Grid>
        <div ref={lastElement} style={{ height: 40, width: 1 }}></div>
      </SectionInner>
    </MainLayoutSection>
  );
};

export default Posts;
