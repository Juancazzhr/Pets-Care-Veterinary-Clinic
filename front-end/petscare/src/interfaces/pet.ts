export interface Pet {
    id: number,
    name: string,
    size: string,
    race: string,
    clientId: number
  }
  
  export interface PetFull {
    id: number,
    name: string,
    size: string,
    race: string,
    clientId: number,
    petType: {
      id: number,
      typeName: string
    },
    petClinicalHistory: {
      id: number,
      cratedAt: Date,
      lastUpdate: Date,
      weigth: number
    }
  }