import React, { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from "reactstrap";

export default function ({ Title, Content1, Content2, Content3 }) {
  return (
    <UncontrolledAccordion defaultOpen={["1", "1"]} stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="2">{Title}</AccordionHeader>
        <AccordionBody accordionId="2">
          {Content1}
          {Content2}
          {Content3}
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
}
