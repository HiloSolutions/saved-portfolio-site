import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CTAButton from './CTAButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { FaGithub } from 'react-icons/fa';

const PortfolioItemModal = ({
  title,
  shortDescription,
  longDescription,
  frontEnd,
  backEnd,
  leveragedSoftware,
  github
}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    maxHeight: "90%",
    bgcolor: "#fff",
    borderRadius: "0.75em",
    boxShadow: 24,
    overflow:'scroll',
    padding: 4,
  };


  const buildChips = (arr) => {
    const chips = arr.map((item) => (
      <Chip
        label={item}
        key={`${item}${Math.floor(Math.random() * 10) + 1}`}
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

    <div>
      <Button 
      className='card-btn' 
      onClick={handleOpen}
      >View Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h3"
            align="center"
            sx={{ textTransform: "uppercase", fontWeight: 'bold', fontSize: '2em' }}
          >
            {title}
          </Typography>
          <Typography className="modal-modal-description" sx={{ mt: 2 }}>
            {shortDescription}
          </Typography>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2, fontWeight: 'bold' }}
          >
            Description
          </Typography>
          <Typography
            paragraph={true}
            id="modal-modal-description"
          >
            {longDescription}
          </Typography>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2, fontWeight: 'bold' }}
          >
            Stack
          </Typography>

          <Grid
            alignItems="center"
            container spacing={2}
          >
            <Grid item xs={3}>
              <Item sx={{ fontSize: '14px' }}>Front-end</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{buildChips(frontEnd)}</Item>
            </Grid>

            <Grid item xs={3}>
              <Item sx={{ fontSize: '14px' }}>Back-end</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{buildChips(backEnd)}</Item>
            </Grid>

            <Grid item xs={3}>
              <Item sx={{ fontSize: '14px' }}>Leveraged Software</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{buildChips(leveragedSoftware)}</Item>
            </Grid>

          </Grid>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 4 }}>
            <CTAButton 
            url={github}
            icon={<FaGithub />}
            label='GitHub'
            />

            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PortfolioItemModal;