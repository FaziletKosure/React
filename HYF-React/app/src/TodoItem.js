import React from 'react';

import './TodoItem.css';

export default ({ _id, description, onResolve, onEditClick, done }) => {

    const onResolveClick = (event) => {
        onResolve(_id);
    };

    const onEdit = (event) => {
        onEditClick(_id);
    };

    return (
        <li className="TodoItem">
            <button onClick={onResolveClick} className="TodoItem--resolve">✓</button>
            <span style={done === true ? { textDecoration: 'line-trough' } : {}}>{description}</span>
            <button onClick={onEdit} className="TodoItem--edit">Edit</button>
        </li>
    )
}
