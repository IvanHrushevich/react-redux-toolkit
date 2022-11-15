import { FC } from 'react';
import { Post } from '../models/Post';

type Props = {
  post: Post;
  remove: (post: Post) => void;
  update: (post: Post) => void;
};

const PostItem: FC<Props> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };
  const handleUpdate = (event: React.MouseEvent) => {
    const title: string = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div className="post" onClick={handleUpdate}>
      {post.id}: {post.title}
      <button className="button-delete" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
};

export default PostItem;
