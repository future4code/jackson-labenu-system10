import { Request, Response } from "express"
import { createMissionData } from "../data/createMissionData";


export const createMission = async(req:Request, res:Response) =>{
    try{
        if(!req.body.name ||
            !req .body.start_date ||
            !req.body.end_date ||
            !req.body.module
            ){
                res.status(400)
                .send("Preencha todos os campos")
        }
        const id:number = Date.now() + Math.random()
        await createMissionData(
            id,
            req.body.name,
            req.body.start_date,
            req.body.end_date,
            req.body.modules
        );
        
        res.status(200).send("Cadastro de turma criado com sucesso!")

    } catch(error){
        res.status(400).send({
        message: error.message ||  error.sqlMessage 
        })
    }
} 
