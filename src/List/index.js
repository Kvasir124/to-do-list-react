import React from 'react';
import './style.css';

const List = ({ tasks, hideFinished }) => (
    <ul className="list" >
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__listItem ${task.done && hideFinished ? "list__listItem--hidden" : ""}`}
            >
                <button className="list__button">{task.done ? "✔" : ""}</button>
                <p className={`list__paragragh ${task.done ? "list__paragraph--marked" : ""}`}>{task.content}</p>
                <button className="list__button list__button--second">🗑️</button>
            </li>
        ))}
    </ul>
);

export default List;