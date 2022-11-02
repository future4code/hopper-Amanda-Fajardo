import { connection } from "../../data/connection"


export default async function selectWithAll(name: any, type: any, sort: string, order: string, limit: number, offset: number): Promise<any>{
  const result = await connection.raw(`
  SELECT id, name, email, type
  FROM aula48_exercicio
  WHERE name LIKE '%${name}%'
  OR type LIKE '%${type}%'
  ORDER BY ${sort} ${order}
  LIMIT ${limit}
  OFFSET ${offset};
  `)
  return result[0] 
}