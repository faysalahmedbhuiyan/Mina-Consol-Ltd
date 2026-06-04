import { Link } from 'react-router-dom'

export default function Footer () {
  const whatsappNumber = '8801XXXXXXXXX'

  return (
    <footer className='bg-dark text-white pt-5 pb-3'>
      <div className='container'>
        <div className='row g-4'>
          {/* Company Info */}

          <div className='col-lg-4 col-md-6'>
            <h4 className='fw-bold mb-3'>Mina Consol Ltd</h4>

            <p className='text-light'>
              Your trusted partner for studying abroad. We help students achieve
              their academic goals through professional counselling, university
              admission support, visa guidance, and global education
              opportunities.
            </p>

            {/* Social Media */}

            <div className='d-flex gap-3 fs-4 mt-4'>
              <a
                href='https://www.facebook.com/profile.php?id=61590326040768'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'
              >
                <i className='bi bi-facebook'></i>
              </a>

              <a href='/' className='text-white'>
                <i className='bi bi-instagram'></i>
              </a>

              <a href='/' className='text-white'>
                <i className='bi bi-linkedin'></i>
              </a>

              <a href='/' className='text-white'>
                <i className='bi bi-youtube'></i>
              </a>
            </div>
          </div>

          {/* Services */}

          <div className='col-lg-3 col-md-6'>
            <h5 className='fw-bold mb-3'>Our Services</h5>

            <ul className='list-unstyled'>
              <li className='mb-2'>Study Abroad Consultancy</li>
              <li className='mb-2'>University Admission Support</li>
              <li className='mb-2'>Visa Processing Assistance</li>
              <li className='mb-2'>Student Counseling</li>
              <li className='mb-2'>Documentation Support</li>
              <li className='mb-2'>Scholarship Guidance</li>
            </ul>
          </div>

          {/* Quick Links */}

          <div className='col-lg-2 col-md-6'>
            <h5 className='fw-bold mb-3'>Quick Links</h5>

            <ul className='list-unstyled'>
              <li className='mb-2'>
                <Link className='text-white text-decoration-none' to='/'>
                  Home
                </Link>
              </li>

              <li className='mb-2'>
                <Link className='text-white text-decoration-none' to='/about'>
                  About Us
                </Link>
              </li>

              <li className='mb-2'>
                <Link
                  className='text-white text-decoration-none'
                  to='/services'
                >
                  Services
                </Link>
              </li>

              <li className='mb-2'>
                <a
                  href='https://maps.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white text-decoration-none'
                >
                  Office Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div className='col-lg-3 col-md-6'>
            <h5 className='fw-bold mb-3'>Contact Us</h5>

            <p>Bangladesh</p>

            <p className='mb-1'>
              <strong>Email:</strong>
              <br />
              minaconsol.official@gmail.com
            </p>

            <p>
              <strong>Phone:</strong>
              <br />
              +8801XXXXXXXXX
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Mina%20Consol%20Ltd`}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success rounded-pill'
            >
              <i className='bi bi-whatsapp me-2'></i>
              WhatsApp Us
            </a>
          </div>
        </div>

        <hr className='border-secondary my-4' />

        <div className='text-center text-light'>
          <div>
            © {new Date().getFullYear()} Mina Consol Ltd. All Rights Reserved.
          </div>

          <small className='d-block mt-2 text-secondary'>
            Created by Md Faysal Ahmed Bhuiyan
          </small>
        </div>
      </div>
    </footer>
  )
}
