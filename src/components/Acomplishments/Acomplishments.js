import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 16, text: 'Projects'},
  { number: 3, text: 'College Awards', },
  { number: 3, text: 'ICSI & Udemy Web DevCourse Certification ', },
  { String: 'always', text: 'Team Work & Club Member', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
         <Box key={index}>
           <BoxNum>{card.number}+</BoxNum>
           <BoxText>{card.text}</BoxText>
         </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
