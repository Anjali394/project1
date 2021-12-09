import React from 'react'

function Person({person}) {
    return (
        <div>
        <h2>
        I am {person.name}. I am {person.age} years old with {person.id} as ID
        </h2>
        </div>
    )
}

export default Person
