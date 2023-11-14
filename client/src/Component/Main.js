import React from 'react'
import ChatHeader from './ChatHeader'
import Login from './Login'

function Main({user,msg,setmsg,newUser,logNewUser,handleChange}) {
  return (
    <main className="content">           
    <div className='container mt-3'>
        {user && (
            <ChatHeader user={user} msg={msg} setmsg={setmsg}/>
        )}
        {!user && (
        <Login newUser={newUser} logNewUser={logNewUser} handleChange={handleChange}/>)}
    </div>
</main>
  )
}

export default Main