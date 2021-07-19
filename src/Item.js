import React, { useEffect, memo } from 'react'

const Item = memo(({ user, handleDelete }) => {

    useEffect(() => {
        console.log('items render');
    })

    return (
        <li>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>
                Delete
            </button>
        </li>
    )
})

export default Item
