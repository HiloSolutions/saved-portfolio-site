import React from 'react';
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../styles/nav.css";




export default function NavBar( {color} ) {
  const [shouldRender, setShouldRender] = useState(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 800px)');
    setShouldRender(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setShouldRender(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);


 
  
  
  return shouldRender ? (
    <AppBar
      //position="relative"
      style={{
        fontWeight: 600,
        padding: '10px 0px',
        height: 56,
        backgroundColor: color,
        boxShadow: '0 1px 8px rgba(0,0,0,0.3)',
        zIndex: 100,
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          margin: "0 40px",
        }}
      >

        {/**Logo with link to the home page */}
        <Link
          style={{ textDecoration: 'none' }}
          className="text-xl text-white"
          to="/"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                letterSpacing: '2px',
                color: '#ffffff',
                fontFamily: "'Comfortaa', Helvetica, sans-serif"
              }}
            ><strong>LAUREN JOHNSTON</strong>
            </span>
            <span
              style={{
                color: '#ffffff',
                fontSize: '12px',
                lineHeight: '15px',
                letterSpacing: '2.5px',
                fontFamily: "'Comfortaa', Helvetica, sans-serif"
              }}
            >
              HILO SOLUTIONS
            </span>
          </div>
        </Link>

        <Box
          className="nav-menu"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >

          {/**visit home page */}
          <Button
  
            className='nav-text'
            disableTouchRipple={true}
            style={{
              display: 'block',
              background: 'linear-gradient(to right, #FFD500, #ffa514)',
              backgroundSize: '200% 200%',
              animation: 'rainbow 2s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color .2s ease-in-out',
              fontFamily: "'Comfortaa', Helvetica, sans-serif",
              paddingLeft: '0px',
              paddingRight: '30px',
            }}
          >
            {
              <Link
                style={{ textDecoration: 'none' }}
                to={`/`}
              >
                Home
              </Link>
            }
          </Button>

          {/**visit portfolio page */}
          <Button
        
            className='nav-text'
            disableTouchRipple={true}
            style={{
              display: 'block',
              background: 'linear-gradient(to right, #FFD500, #ffa514)',
              backgroundSize: '200% 200%',
              animation: 'rainbow 2s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color .2s ease-in-out',
              fontFamily: "'Comfortaa', Helvetica, sans-serif",
              paddingLeft: '0px',
              paddingRight: '30px',
            }}
          >
            {
              <Link
                style={{ textDecoration: 'none' }}
                to={`/portfolio`}
              >
                Portfolio
              </Link>
            }
          </Button>

          {/**visit about page */}
          <Button
            className='nav-text'
            disableTouchRipple={true}
            style={{
              display: 'block',
              background: 'linear-gradient(to right, #FFD500, #ffa514)',
              backgroundSize: '200% 200%',
              animation: 'rainbow 2s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color .2s ease-in-out',
              fontFamily: "'Comfortaa', Helvetica, sans-serif",
              paddingLeft: '0px',
              paddingRight: '30px',
            }}

          >
            {
              <Link
                style={{ textDecoration: 'none' }}
                to={`/about`}
              >
                About Me
              </Link>
            }
          </Button>

        </Box>
      
      </Box>
    </AppBar>
  ) :
    null
}

