import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
    </div>
  );
}

export default App;
