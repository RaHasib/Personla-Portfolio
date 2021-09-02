import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typical from 'react-typical'


const Hero = (props) => (
   <Section row nopadding>
     <LeftSection>
       <SectionTitle main center>
            Hi, I'm Hasib
       </SectionTitle>
       <SectionText>
         I'm a{' '}
           <Typical
              loop={Infinity}
              wrapper="b"
              typeSpeed="0"
              delay="40"
              steps={[
                'Full-Stack Web Developer',
                'Designer',
                'Problem-Solver',
                'Photographer',
                'Enthusiastic Learner'
              ]}
              />
       </SectionText>
       <Button onClick={() => window.location='https://www.linkedin.com/in/raisul-amin-hasib-362413179/'}>
         Learn More
       </Button>
     </LeftSection>
   </Section>
);

export default Hero;