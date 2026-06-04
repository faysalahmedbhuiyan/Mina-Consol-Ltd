import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg sticky-top custom-navbar'>
      <div className='container'>
        <Link className='navbar-brand d-flex align-items-center fw-bold' to='/'>
          <img
            src={logo}
            alt='Mina Consol Ltd'
            width='55'
            height='55'
            className='me-2 rounded'
          />

          <div className='company-name'>
            <div className='fw-bold'>Mina Consol Ltd</div>
          </div>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#mainNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='mainNavbar'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2'>
            <li className='nav-item'>
              <Link className='nav-link fw-semibold' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link fw-semibold' to='/destination'>
                Destination
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link fw-semibold' to='/services'>
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link fw-semibold' to='/successStories'>
                Success Stories
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link fw-semibold' to='/about'>
                About Us
              </Link>
            </li>
          </ul>

          <div className='d-flex'>
            <a
              href='mailto:minaconsol.official@gmail.com?subject=Free Counselling Request'
              className='btn btn-primary px-4 py-2 fw-semibold rounded-pill'
            >
              Get Free Counselling
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
