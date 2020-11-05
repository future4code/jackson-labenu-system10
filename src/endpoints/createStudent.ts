import { Request, Response } from "express"
import { createStudentData } from "../data/createStudentData";


export const createStudent = async(req:Request, res:Response) =>{
    try{
        if(!req.body.name ||
            !req .body.email ||
            !req.body.birth_date
            ){
                res.status(400)
                .send("Preencha todos os campos")
        }
        const id:number = Date.now() + Math.random()
        await createStudentData(
            id,
            req.body.name,
            req.body.email,
            req.body.birth_date
        );
        
        res.status(200).send("Cadastro de estudante criado com sucesso!")

    } catch(error){
        res.status(400).send({
        message: error.message ||  error.sqlMessage 
        })
    }
} 