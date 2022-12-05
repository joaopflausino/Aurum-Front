import React, {useState} from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from 'reactstrap';

export default function ({Title,Content1,Content2,Content3}) {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    }
  
  return (
        <UncontrolledAccordion
          defaultOpen={[
            '1',
            '2'
          ]}
          stayOpen
        >
              <AccordionItem>
                <AccordionHeader targetId="1">
                  {Title}
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  {Content1}
                  {Content2}
                  {Content3}
                </AccordionBody>
              </AccordionItem>
        </UncontrolledAccordion>
  );
}

                