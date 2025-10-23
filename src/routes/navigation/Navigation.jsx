import { Link, Outlet } from 'react-router-dom'
import CrwnLogo from '../../assets/crown.svg';
import './navigation.styles.scss'
function Navigation() {
  return (
    <>
    <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={CrwnLogo} className='logo' alt='Crown Logo' />
        </Link>
        <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>SHOP</Link>
            <Link className='nav-link' to='/signin'>SIGN IN</Link>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation