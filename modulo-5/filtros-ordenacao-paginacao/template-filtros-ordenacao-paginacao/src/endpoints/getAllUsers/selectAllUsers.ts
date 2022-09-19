import { connection } from "../../data/connection"

export default async function selectAllUsers(name: string):Promise<any> {
    const result = await connection.raw(`
    SELECT *
    FROM aula48_exercicio
    WHERE name LIKE '%${name}%';
 `)

 return result[0];
 }
