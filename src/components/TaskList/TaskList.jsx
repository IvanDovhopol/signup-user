import { useSelector } from 'react-redux';
import { Task } from 'components/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import { List } from './styled';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <List>
      {tasks.map(({ id, text }) => (
        <li key={id}>{<Task id={id} text={text} />}</li>
      ))}
    </List>
  );
};
