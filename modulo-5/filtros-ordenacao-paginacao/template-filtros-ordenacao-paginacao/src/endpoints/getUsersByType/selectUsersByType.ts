import { connection } from "../../data/connection"

export default async function selectUsersByType(type: any):Promise<any> {
    const result = await connection.raw(`
    SELECT *
    FROM aula48_exercicio
    WHERE type LIKE '${type}';
 `)

 return result[0];
 }
