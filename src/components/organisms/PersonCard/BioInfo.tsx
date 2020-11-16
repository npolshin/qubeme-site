import React from 'react';
import styled from 'styled-components';
import InfoItem from '../../molecules/InfoItem';
import { UserData } from '../../../shared/user.types';
import { SizedBox } from '../../molecules/InfoItem';
import Avatar from '../../../img/no-avatar-png-2.png';
interface BioInfoProps {
  user: UserData;
}

const BioInfo: React.FC<BioInfoProps> = ({ user }) => {
  const avatarUrl = user.photoUrl ?? Avatar;
  // const quote = user.quoute ?? 'I don’t like being pooped at';
  const speciality = user.speciality;
  const company = user.companyName ? ' at ' + user.companyName : '';
  const position = speciality + company;
  console.log(speciality, position);
  return (
    <Horizontal>
      <div>
        <AvatarImage src={avatarUrl} alt="avatar"></AvatarImage>
      </div>
      <SizedBox width={20}></SizedBox>
      <BioContainer>
        <TitleContainer>
          <Name>{user.fullName}</Name>
          {
            // <Quote>{quote}</Quote>
          }
        </TitleContainer>
        <div>
          <InfoItem title="Position" value={position}></InfoItem>
          {
            //   <InfoItem title="Sex" value={user.sex ?? 'male'}></InfoItem>
            // <InfoItem title="Age" value={user.age ?? 21}></InfoItem>
          }
        </div>
      </BioContainer>
    </Horizontal>
  );
};

const BioContainer = styled.div`
  display: grid;
  /* grid-row-gap: 15px; */
`;

// const Quote = styled.h3`
//   font-size: 1.5rem;
//   font-weight: lighter;
//   color: #b7b7b7;
// `;

const Name = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  /* grid-template-rows: auto auto; */
`;

const Horizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  grid-column-gap: 20px;
`;

const AvatarImage = styled.img`
  border-radius: 10px;
  width: 165px;
  height: 100%;
  object-fit: cover;
`;

export default BioInfo;
