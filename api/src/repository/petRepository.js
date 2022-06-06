import { con } from "./connection.js";

export async function AddPet(pet){
    const c= `INSERT INTO PET(ID_PET, NM_PET)
    VALUES(?, ?)`;

    const [r] = await con.query(c, [pet.nome]);
    pet.id= r.insertId;
    return pet;
}

export async function Verpet (nome){
    const c= `SELECT NM_PET
    FROM PET
    WHERE (? = 'todos' || NM_PET = ?)`;

    const [linhas] = await con.query(c, [nome,nome]);
    return linhas;
}