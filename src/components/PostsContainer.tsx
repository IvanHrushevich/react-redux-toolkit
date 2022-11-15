import { FC } from 'react';

import { Post } from '../models/Post';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';

const PostsContainer: FC = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(15);
  const [createPost, { isLoading: isPostCreationLoading }] = postApi.useCreatePostMutation();
  const [updatePost] = postApi.useUpdatePostMutation();
  const [deletePost] = postApi.useDeletePostMutation();

  const handleCreate = async () => {
    const title: string = prompt() || '';
    const post: Post = {
      title,
      body: title,
    };

    await createPost(post);
  };

  return (
    <div>
      <button onClick={handleCreate}>Create Post</button>

      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}

      {posts?.map((post) => (
        <PostItem post={post} remove={deletePost} update={updatePost} key={post.id} />
      ))}
    </div>
  );
};

export default PostsContainer;
