import { connection} from "../../data/connection";


export default async function selectOrderUsers(sort: string, order: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${sort} ${order};
    `)

    return result[0]
}