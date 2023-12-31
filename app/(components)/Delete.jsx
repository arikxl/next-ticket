'use client'

import { faX } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Delete = ({id}) => {

  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE'  
    });

    if (res.ok) {
      router.refresh();
      router.push('/')
    }
  }

  return (
    <FontAwesomeIcon icon={faX} onClick={deleteTicket}
      className='text-red-400 hover:cursor-pointer hover:text-red-200'
    />
  )
}

export default Delete