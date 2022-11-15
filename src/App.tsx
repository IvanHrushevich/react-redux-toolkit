import { FC } from 'react';
import './App.css';

import PostsContainer from './components/PostsContainer';

const App: FC = () => {
  return (
    <div className="container">
      <PostsContainer />
    </div>
  );
};

export default App;
