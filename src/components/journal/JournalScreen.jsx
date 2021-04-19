import React from 'react'
import NoteScreen from '../notes/NoteScreen'
// import NothingSleceted from './NothingSleceted'
import Sidebar from './Sidebar'

const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            
            <Sidebar/>

            <main>
                {/* <NothingSleceted/> */}
                <NoteScreen/>
            </main>

        </div>
    )
}

export default JournalScreen
