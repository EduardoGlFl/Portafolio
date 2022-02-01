import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Frontend <br /> Developer Jr.
      </SectionTitle>
      <SectionText>
        Hi! my name is Eduardo lets create something together<br/>
        <a href='#contact'> here </a>
      </SectionText>
      {/* <Button href="#contact">
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;