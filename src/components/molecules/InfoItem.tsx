import React from 'react';
import styled from 'styled-components';

interface InfoItemProps {
  value: string | number;
  title: string;
  gap?: number;
  buttonElement?: () => JSX.Element;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value, gap, buttonElement }) => {
  return (
    <Wrapper>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
        <PropertyTitle>{title}:</PropertyTitle>
        <SizedBox width={gap ?? 10}></SizedBox>
        <PropertyValue>{value}</PropertyValue>
      </div>
      <div>{!!buttonElement && buttonElement()}</div>
    </Wrapper>
  );
};

interface SizedBoxProps {
  width?: number;
}

export const SizedBox = styled.div`
  width: ${(props: SizedBoxProps) => props.width ?? 10}px;
`;

const PropertyTitle = styled.span`
  font-size: 1.5rem;
  color: black;
  font-weight: lighter;
`;

const PropertyValue = styled.span`
  font-size: 1.5rem;
  color: black;
  font-weight: lighter;
  width: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
export default InfoItem;
