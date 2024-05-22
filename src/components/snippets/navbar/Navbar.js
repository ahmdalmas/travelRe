import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/joy';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Navbar.css'


function NavScrollExample() {

  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isServicePage = location.pathname.startsWith('/services/activity');
  const navClassName = `header-area style-2 ${isServicePage ? 'service-navibar' : 'navibar'} ${isSticky ? 'sticky' : ''}`;

  
  
  return (
    <Navbar expand="lg" className={navClassName}>
      <Container fluid className='xl:mx-8 lg:mx-5 md:mx-2 justify-content-between p-0'>
        <Navbar.Brand href="/" className='fs-2 fw-bold text-white'>
          TRAVL<i className="fab fa-gripfire fs-1"></i>
        </Navbar.Brand>

        <div className='d-flex flex-row align-content-center'>
          <div className='country-btn md:me-3 xs:me-0'>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <div className='icon-btn'>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{ padding: '0' }}
                >
                  <Avatar
                    size="md"
                    sx={{
                      borderColor: '#fff',
                      backgroundColor:'transparent',
                      '& svg': {
                        fill: '#fff',
                      },
                    }}
                  />
                </IconButton>
              </div>
            </Box>
          </div>
          {/* <div className='align-content-center'><a className='main-button'>Apply Now</a></div> */}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;