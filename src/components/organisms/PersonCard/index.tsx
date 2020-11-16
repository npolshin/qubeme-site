import React from 'react';
import { UserData, Socials } from '../../../shared/user.types';
import styled from 'styled-components';
import BioInfo from './BioInfo';
import { CategoryTitle } from '../../atoms/CategoryTitle/index';
import InfoItem from '../../molecules/InfoItem';
import { faPhoneAlt, faEnvelope, faUserPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../../shared/mediaQueries';
import CircleIcons from '../../atoms/ClickableCircleIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizedBox } from '../../molecules/InfoItem';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faSnapchat,
  faTelegram,
  faTwitter,
  faViber,
  faVk,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

interface PersonCardProps {
  user: UserData;
}

const socialToIcon = (social: keyof Socials) => {
  type Icon = Record<keyof Socials, IconDefinition>;
  const icons: Icon = {
    facebook: faFacebook,
    whatsapp: faWhatsapp,
    telegram: faTelegram,
    viber: faViber,
    instagram: faInstagram,
    linkedin: faLinkedin,
    skype: faSkype,
    snapchat: faSnapchat,
    twitter: faTwitter,
    vk: faVk,
    youtube: faYoutube,
  };
  return icons[social];
};

const socialToLink = (type: keyof Socials, value: string) => {
  type Link = Record<keyof Socials, string>;

  const links: Link = {
    skype: '',
    snapchat: '',
    viber: '',
    telegram: 'https://t.me/',
    whatsapp: 'https://wa.me/',
    vk: 'https://vk.com/',
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/in/',
    twitter: 'https://twitter.com/',
    youtube: 'https://youtube.com/c/',
  };
  const link = links[type] + value;
  console.log(links[type], link);
  return link;
};

const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) => obj[key];

const PersonCard: React.FC<PersonCardProps> = ({ user }) => {
  console.log(user);
  const socials = Object.keys(user.socials);
  return (
    <Wrapper>
      <Pane>
        <PaneContainer>
          <div>
            <BioInfo user={user}></BioInfo>
            <div style={{ width: 'fit-content' }}>
              {user.bio && (
                <React.Fragment>
                  <CategoryTitle>About</CategoryTitle>
                  <AboutText>{user.bio}</AboutText>
                </React.Fragment>
              )}
            </div>
          </div>
          <AdditionalContainer>
            <ContactsContainer>
              <div style={{ display: 'grid', gridRowGap: 10 }}>
                <CategoryTitle>Contacts</CategoryTitle>
                <InfoItem
                  title="E-mail"
                  value={user.email}
                  buttonElement={() => (
                    <CircleIcons icon={faEnvelope} type="email" email={user.email}></CircleIcons>
                  )}></InfoItem>
                <InfoItem
                  title="Phone"
                  value={user.phoneNumber}
                  buttonElement={() => (
                    <CircleIcons icon={faPhoneAlt} type="phone" phone={user.phoneNumber}></CircleIcons>
                  )}></InfoItem>
                {user.phone2 ? (
                  <InfoItem
                    title="Phone 2"
                    value={user.phone2}
                    buttonElement={() => (
                      <CircleIcons icon={faPhoneAlt} type="phone" phone={user.phone2}></CircleIcons>
                    )}></InfoItem>
                ) : null}
              </div>
              <div>
                <CategoryTitle>Additional info</CategoryTitle>
                {user.adress ? <InfoItem title="Adress" value={user.adress}></InfoItem> : null}
                {user.web ? <InfoItem title="Website" value={user.web}></InfoItem> : null}
              </div>
            </ContactsContainer>
          </AdditionalContainer>
        </PaneContainer>
        <div style={{ height: 20 }}></div>
        <SocialsContainer>
          {socials.map((social) => {
            const socialValue = getKeyValue<Socials, keyof Socials>(social as keyof Socials)(user.socials);
            const socialType = social;
            const socialIcon = socialToIcon(socialType as keyof Socials);
            const socialLink = socialToLink(socialType as keyof Socials, socialValue ?? '');
            return socialValue ? (
              <SocialItem href={socialLink}>
                <FontAwesomeIcon icon={socialIcon} color="#6550f7"></FontAwesomeIcon>
                <SizedBox width={10}></SizedBox>
                <span>{socialValue}</span>
              </SocialItem>
            ) : null;
          })}
        </SocialsContainer>
        <div style={{ height: 20 }}></div>
        <AddToContacts href={`https://rocky-coast-04216.herokuapp.com/card/${user.uid}`}>
          <span>Add to contacts</span>
          <SizedBox width={10}></SizedBox>
          <FontAwesomeIcon icon={faUserPlus} color="white" size={'2x'}></FontAwesomeIcon>
        </AddToContacts>
      </Pane>
    </Wrapper>
  );
};

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
`;

const SocialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

const AddToContacts = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  border-radius: 1em;
  background-color: #6550f7;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContactsContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-row-gap: 20px;
  width: 100%;
`;

const PaneContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.p`
  font-size: 1.5rem;
  font-weight: lighter;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  @media ${device.mobileL} {
    padding: 0;
  }
`;

const Pane = styled.div`
  -webkit-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  row-gap: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export default PersonCard;
