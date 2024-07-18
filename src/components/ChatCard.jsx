import React from 'react'
const ChatCard = ({user}) => {
  return (
    <div className='h-16 w-full flex justify-between items-center cursor-pointer'>
      {console.log(user)}
        <div className='flex items-center gap-5 w-full text-nowrap'>
            <img className='h-12 rounded-full' src={user && user?.img} alt='user'/>
            <p className='text-xl font-semibold'>{user && user?.name}</p>
        </div>
    </div>
  )
}

export default ChatCard