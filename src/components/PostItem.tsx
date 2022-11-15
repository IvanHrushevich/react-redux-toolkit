import { FC } from 'react';
import { Post } from '../models/Post';

type Props = { post: Post };

const PostItem: FC<Props> = ({ post }) => {
  return (
    <div className="post">
      {post.id}: {post.title}
      <button className="button-delete">Delete</button>
    </div>
  );
};

export default PostItem;
