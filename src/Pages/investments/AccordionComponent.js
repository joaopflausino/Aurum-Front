import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {MdOutlineExpandLess,MdOutlineKeyboardArrowDown} from 'react-icons/md';

export default function ({Title,Content1,Content2}) {
  return (
        <Accordion>
            <AccordionSummary
                  expandIcon={< MdOutlineExpandLess />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{Title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {Content1}
                    {Content2}
                </AccordionDetails>
        </Accordion>
  )
}

                