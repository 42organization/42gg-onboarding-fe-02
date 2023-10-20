import '../styles/NavBar.scss';

function NavBar() {
  return (
    <nav>
      <header className='p-3 text-bg-dark'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a
              href='/'
              className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
            >
              <svg
                className='bi me-2'
                width='40'
                height='32'
                role='img'
                aria-label='Bootstrap'
              ></svg>
            </a>

            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <a href='/admin' className='nav-link px-2 text-secondary'>
                  Admin
                </a>
              </li>
              <li>
                <a href='/manager' className='nav-link px-2 text-white'>
                  Manager
                </a>
              </li>
              <li>
                <a href='/normal' className='nav-link px-2 text-white'>
                  Normal
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  About
                </a>
              </li>
            </ul>

            <a
              href='#'
              className='d-block link-body-emphasis text-decoration-none dropdown-toggle'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <img
                src='https://avatars.githubusercontent.com/u/93255519?v=4'
                alt='mdo'
                width='32'
                height='32'
                className='rounded-circle'
              />
            </a>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default NavBar;
