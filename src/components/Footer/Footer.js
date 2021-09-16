import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiMinutemailer} from 'react-icons/si';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    
    <FooterWrapper>
      
      <LinkList>

      <LinkColumn>
      <LinkTitle>
      <SiMinutemailer size="3rem" style={{ color:"#030e12"}}/>
      Email
      </LinkTitle>
      <LinkItem href="mailto:raisulaminhasib@gmail.com.com">
      Whether you are interested in starting a project together, looking for a junior developer to join your team, need a website, want to know more about me or simply want to connect - feel free to reach out via email raisulaminhasib@gmail.com
      </LinkItem>
      </LinkColumn>
      </LinkList>
      <br/><br/>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"You are only as good as your<br/> record collection" - Dj Spooky</Slogan>
        </CompanyContainer>
         <SocialContainer>
         <SocialIcons href="https://github.com/RaHasib">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/raisul-amin-hasib-362413179/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/raisul_hasib/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
     
    </FooterWrapper>
  );


};

export default Footer;


