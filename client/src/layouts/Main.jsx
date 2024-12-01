import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const Main = () => {
  return (
    <div>
     <Navbar></Navbar>
      <div className='container mx-auto'>
        <Outlet />
      </div>
    
    </div>
  )
}

export default Main
