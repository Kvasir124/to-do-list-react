import { markTask, selectTasks } from '../tasksSlice.js';
import { Button, TaskList, TaskListItem, Content } from './styled.js'
import { useSelector, useDispatch } from 'react-redux';

const List = ({ removeTask }) => {
    const dispatch = useDispatch();
    const { tasks, hideFinished } = useSelector(selectTasks);

    return (
        <TaskList>
            {tasks.map(task => (
                <TaskListItem
                    key={task.id}
                    hidden={task.done && hideFinished}
                >
                    <Button onClick={() => dispatch(markTask(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content marked={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        second
                        onClick={() => removeTask(task.id)}
                    >
                        🗑️
                    </Button>
                </TaskListItem>
            ))}
        </TaskList>
    );
}

export default List;