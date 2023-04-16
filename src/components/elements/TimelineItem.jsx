
import React from 'react';
import { Paper, Button } from '@mui/material';

function TimelineItem(props) {
  return (
    <div>
      <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">
          Check it out!
        </Button>
      </Paper>
    </div>

  )
}

export default TimelineItem;