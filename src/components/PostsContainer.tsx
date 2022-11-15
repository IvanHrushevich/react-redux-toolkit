import { FC } from 'react';

import { postApi } from '../services/PostService';
import PostItem from './PostItem';

const PostsContainer: FC = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(15);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {posts?.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsContainer;
