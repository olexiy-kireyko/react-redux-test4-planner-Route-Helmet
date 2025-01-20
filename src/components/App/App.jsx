import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '../AppBar/AppBar';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import css from './App.module.css';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/operations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const isLoading = useSelector(state => state.tasks.isLoading);
  const error = useSelector(state => state.tasks.error);
  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
}
