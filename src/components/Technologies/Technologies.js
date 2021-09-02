import React from 'react';
import { BiCodeAlt} from 'react-icons/bi';
import { SiVuetify} from 'react-icons/si';
import { CgDesignmodo } from 'react-icons/cg';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
   <SectionDivider />
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
   In the realm of web development, I've worked with a variety of technologies. From the back-end to the front-end.
   </SectionText>
   <List>
     <ListItem>
       <BiCodeAlt size="4rem" style={{ color:"#030e12"}}/>
       <ListContainer>
         <ListTitle>LANGUAGE</ListTitle>
         <ListParagraph>
           Experiance with <br/>
           C,
           Python,
           JavaScript,
           HTML,
           CSS/SCSS,
           Bootstrap,
           SQL
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <SiVuetify size="4rem" style={{ color:"#030e12"}}/>
       <ListContainer>
         <ListTitle>FRAMEWORKS</ListTitle>
         <ListParagraph>
           Experiance with <br/>
           Bootstrap,
           React,
           Vue
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <CgDesignmodo size="4rem" style={{ color:"#030e12"}}/>
       <ListContainer>
         <ListTitle>TOOLS</ListTitle>
         <ListParagraph>
           Experiance with <br/>
           Node.js,
           MongoDB,
           Postman,
           Git & Github
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
</Section>
);

export default Technologies;
