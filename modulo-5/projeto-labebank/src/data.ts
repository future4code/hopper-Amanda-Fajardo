export type User = {
  name: string,
  cpf: string,
  birthday: string | Date,
  balance: number,
  extract: Transation[]
}

export type Transation = {
  description: string,
  value: number,
  date: string | Date
}

export const users : User[] = [
    { name: "Amanda",
    cpf: "00000000000",
    birthday: "06/12/1993",
    balance: 500,
    extract: [
    {
      description: "Claro-TV",
      value: 240,  
      date: "22/08/2022"
    }
  ]
  },
  { name: "Glória",
    cpf: "11111111111",
    birthday: "04/05/1968",
    balance: 700,
    extract: [
    {
      description: "Cartão de Crédito",
      value: 340,  
      date: "22/08/2022"
    }
  ]
  }
]