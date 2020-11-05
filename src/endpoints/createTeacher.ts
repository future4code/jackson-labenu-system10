import { Request, Response } from "express"
import { createTeacherData } from "../data/createTeacherData";


export const createTeacher = async(req:Request, res:Response) =>{
    try{
        if(!req.body.name ||
            !req .body.email ||
            !req.body.birth_date
            ){
                res.status(400)
                .send("Preencha todos os campos")
        }
        const id:number = Date.now() + Math.random()
        await createTeacherData(
            id,
            req.body.name,
            req.body.email,
            req.body.birth_date
        );
        
        res.status(200).send("Cadastro de professor criado com sucesso!")

    } catch(error){
        res.status(400).send({
        message: error.message ||  error.sqlMessage 
        })
    }
} 