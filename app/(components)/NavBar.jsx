import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const NavBar = () => {
  return (
      <nav className='flex justify-between bg-nav py-4 px-16'>
          <div className='flex items-center space-x-4'>
              <Link href='/'>
                  <FontAwesomeIcon icon={ faHome} className='icon'/>
              </Link>
              <Link href='/ticket/new'>
                  <FontAwesomeIcon icon={ faTicket} className='icon'/>
              </Link>
          </div>
          <div>
              <p className='text-default-text'>arikxl@gmail.com</p>
        </div>
      </nav>
  )
}

export default NavBar