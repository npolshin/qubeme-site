import React from 'react';
import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface CircleIconsProps extends FontAwesomeIconProps {
  backgroundColor?: string;
  onClick?: () => void;
  type?: 'phone' | 'email';
  email?: string;
  phone?: string;
}

interface getLinkContentObject {
  type: 'phone' | 'email';
  email?: string;
  phone?: string;
}

const getLinkContent = (data: getLinkContentObject) => {
  const { type, email, phone } = data;
  console.log('getLinkContent:', email, phone);
  let linkValue = '';
  switch (type) {
    case 'email':
      linkValue = `mailto:${email}`;
      break;
    case 'phone':
      linkValue = `tel:${phone}`;
      break;
    default:
      linkValue = '#';
      break;
  }
  return linkValue;
};

const CircleIcons: React.FC<CircleIconsProps> = ({ icon, size, color, email, phone, type }) => {
  let linkValue = '';
  if (type) {
    linkValue = getLinkContent({ type, phone, email });
    console.log(email, phone, linkValue);
  }
  return (
    <a href={linkValue}>
      <Circle>
        <FontAwesomeIcon icon={icon} size={size ?? '2x'} color={color ?? '#6550F7'}></FontAwesomeIcon>
      </Circle>
    </a>
  );
};

const Circle = styled.div`
  padding: 1em;

  border-radius: 100%;
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export default CircleIcons;
