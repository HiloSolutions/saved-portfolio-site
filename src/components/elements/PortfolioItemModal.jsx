import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CTAButton from './CTAButton';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { FaGithub } from 'react-icons/fa';

import '../../styles/modal.css'

const PortfolioItemModal = ({
  title,
  longDescription,
  frontEnd,
  backEnd,
  leveragedSoftware,
  github,
  cta
}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxHeight: "90%",
    bgcolor: "#fff",
    borderRadius: "8px",
    boxShadow: 24,
    overflow: 'scroll',
    padding: 5,
  };


  const buildChips = (arr) => {
    const chips = arr.map((item) => (
      <Chip

        label={item}
        key={`${item}`}
        style={{ marginLeft: '2px', marginTop: '5px' }}
      />
    ))
    return (
      <Item>
        {chips}
      </Item>
    )
  }


  return (

    <div className='modal'>
      <Button
        className='card-btn'
        onClick={handleOpen}
        sx={{ "&:hover": { backgroundColor: "transparent", } }}
      >View Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-container" sx={modalStyle}>
          <h2 className='title'>{title}</h2>


          <h4 className='label'>Description</h4>
          <p className="modal-description">{longDescription}</p>

          <h4 className='label stack'>Stack</h4>

          <Grid
            alignItems="center"
            container spacing={2}
          >

           {frontEnd && (
              <>
              <Grid item xs={3}>
                <Item sx={{color: "#a08ed4", fontSize: '25px', fontFamily: "'Cabin Sketch', cursive" }}>Front-End</Item>
              </Grid>
              <Grid item xs={9}>
                <Item>{buildChips(frontEnd)}</Item>
              </Grid>
            </>
            )}

            {backEnd && (
              <>
              <Grid item xs={3}>
                <Item sx={{color: "#a08ed4", fontSize: '25px', fontFamily: "'Cabin Sketch', cursive" }}>Back-End</Item>
              </Grid>
              <Grid item xs={9}>
                <Item>{buildChips(backEnd)}</Item>
              </Grid>
            </>
            )}

            {leveragedSoftware && (
              <>
                <Grid item xs={3}>
                  <Item sx={{color: "#a08ed4", fontSize: '25px', fontFamily: "'Cabin Sketch', cursive" }}>Leveraged Software</Item>
                </Grid>
                <Grid item xs={9}>
                  <Item>{buildChips(leveragedSoftware)}</Item>
                </Grid>
              </>
            )}

          </Grid>


          {github && (
              <CTAButton url={github} icon={<FaGithub />} label='GitHub' />
          )}

          {cta && (
              <CTAButton url={cta} label='Go to site' />
          )}

        </Box>
      </Modal>
    </div>
  );
};

export default PortfolioItemModal;