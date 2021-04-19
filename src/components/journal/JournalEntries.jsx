import React from 'react'
import JournalEntry from './JournalEntry'

const JournalEntries = () => {
    const entries = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="normal__entries">
            {
                entries.map(value => (
                    <JournalEntry  value={value} key={value}/>
                ))
            }
        </div>
    )
}

export default JournalEntries
