import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Hamburger from 'hamburger-react';
import "../styles/nav.css";


function SideBar() {
  const [shouldRender, setShouldRender] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [homeActive, setHomeActive] = useState(true);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 799px)');
    setShouldRender(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setShouldRender(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const toggleDrawer = (open) => (e) => {
    if (
      e &&
      e.type === 'keydown' &&
      (e.key === 'Tab' || e.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const handleHamburgerClick = () => {
    setOpen(!open);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return shouldRender ? (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Hamburger
          toggled={open}
          toggle={handleHamburgerClick}
          color='#177177'
          style={{
            zIndex: 1000
          }}
        />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen
      >
        <div
          style={{
            width: '30vw',
            minWidth: '250px',
            paddingTop: '15px',
            paddingLeft: '20px',
          }}
        >
          {/**logo */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: '30px'
            }}
          >
            <span
              style={{
                letterSpacing: '2px',
                color: '#177177',
                fontFamily: "'Comfortaa', Helvetica, sans-serif"
              }}
            ><strong>LAUREN JOHNSTON</strong>
            </span>
            <span
              style={{
                color: '#177177',
                fontSize: '12px',
                lineHeight: '15px',
                letterSpacing: '2.5px',
                fontFamily: "'Comfortaa', Helvetica, sans-serif"
              }}
            >
              HILO SOLUTIONS
            </span>
          </div>

           {/**visit home */}
           <Button
            onClick={handleCloseNavMenu}
            className='nav-text'
            style={{
              display: 'block',
              fontFamily: "'Comfortaa', Helvetica, sans-serif",
              paddingLeft: '12px',
              paddingRight: '30px',
            }}
          >
          {
            <Link
              style={{ textDecoration: 'none', color: '#177177' }}
              onClick={() => setHomeActive(false)}
              to={`/`}
            >
              Home
            </Link>
          }
        </Button>

          {/**visit portfolio page */}
          <Button
            onClick={handleCloseNavMenu}
            className='nav-text'
            style={{
              display: 'block',
              fontFamily: "'Comfortaa', Helvetica, sans-serif",
              paddingLeft: '12px',
              paddingRight: '30px'
            }}
          >
            {
              <Link
                style={{ textDecoration: 'none', color: '#177177', }}
                onClick={() => setHomeActive(false)}
                to={`/portfolio`}
              >
                Portfolio
              </Link>
            }
          </Button>

          {/**visit about page */}
          <Button
            onClick={handleCloseNavMenu}
            className='nav-text'
            style={{
              fontFamily: "'Comfortaa', Helvetica, sans-serif",
              paddingLeft: '12px',
              paddingRight: '30px'
            }}

          >
            {
              <Link
                style={{ textDecoration: 'none', color: '#177177', }}
                onClick={() => setHomeActive(false)}
                to={`/about`}
              >
                About Me
              </Link>
            }
          </Button>
    </div>
      </SwipeableDrawer >
    </div >
  ) : null;
}

export default SideBar;