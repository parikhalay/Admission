import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordian.css'
import AddData from '../../Utils/AddData';

const Accordian = () => {
 
    const [expanded, setExpanded] = React.useState(false);
    


    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
    return (
    <div className='acc-main'>
    <div ><h3 className='acc-heading'>Admission</h3></div>
    {AddData.map((e) => {
      return (
        <>
        
      <Accordion key={e.id} expanded={expanded === e.panel} onChange={handleChange(e.panel)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='acc-icon' />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={e.class}
          
        >
          <Typography className='acc-heading-style' sx={{ width: '33%', flexShrink: 0 }}>
          {e.heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='acc-details'>
          <Typography>
          {e.content1}
          </Typography>
          <Typography>
          {e.content2}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </>
      )
    })}
    </div>
  )
}

export default Accordian
