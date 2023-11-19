export interface Professional {
  id: number;
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  roles_id: number;
  licenseNumber: string;
}

export interface ProfessionalDB {
  id: number;
  licenseNumber: string;
  
}