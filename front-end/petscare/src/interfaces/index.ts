export interface User {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
  email: string;
  password: string;
  rol: Rol;
}
export interface Professional {
  user: User;
  professionalDTO: ProfessionalDTO;
}

export interface ProfessionalDTO {
  licenseNumber: string;
  userId: number;
  id: number;
}

export interface Rol {
  id: number;
  name: string;
  description: null;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
}

export interface Pet {
  id?: number,
  name: string;
  size: string;
  race: string;
  clientId: number;
  petType: PetType;
}

export interface PetClinicalHistory {
  id: number;
  cratedAt: Date;
  lastUpdate: Date;
  weigth: number;
}

export interface PetType {
  id: number;
  typeName: string;
}

export interface AppointmentInput {
  date: Date;
  professionalID: number;
  petID: number;
  serviceID: number;
}

export interface PetUser {
  user: User;
  pet: Pet[];
}
