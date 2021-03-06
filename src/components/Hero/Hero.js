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
        Hi! my name is Eduardo, I'm a computer systems engineer currently
        working on becoming in a fullstack Developer.
        <br />
      </SectionText>
      {/* <Button href="#contact">
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;