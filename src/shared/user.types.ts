export interface UserData {
  phoneNumber: string;
  fullName: string;
  speciality: string;
  uid: string;
  cardId: string;
  cardName: string;
  email: string;
  avatarUrl?: string;
  quoute?: string;
  sex?: string;
  ocupation?: string;
  age?: number;
  bio?: string;
  companyName?: string;
  phone2?: string;
  adress?: string;
  web?: string;
  photoUrl?: string;
  socials: Socials;
}

export interface Socials {
  skype?: string;
  telegram?: string;
  viber?: string;
  whatsapp?: string;
  vk?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  snapchat?: string;
  twitter?: string;
  youtube?: string;
}
