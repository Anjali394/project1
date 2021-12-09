import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Anjali', 'Manish']
    const nameList = names.map( name => <h2>{name}</h2>)
    const persons =[
        {
            id : 1,
            name: 'Anjali',
            Age: 24
        },
        {
            id : 2,
            name: 'Manish',
            Age: 28
        },
        {
            id : 3,
            name: 'Vasudha',
            Age: 35
        }
    ]
    const personList = persons.map(person => <Person key = {person.name} person = {person} />)
        return <div>
           {nameList}
           {personList}
        </div>
}

export default NameList
