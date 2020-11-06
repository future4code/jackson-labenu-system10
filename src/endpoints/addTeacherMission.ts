import {Response,Request} from "express"
import { addTeacherMissionData } from "../data/addTeacherMissionData";


export const addTeacherMission = async(req:Request, res:Response):Promise<void> => {

    try {

        const {teacher_id, mission_id} = req.body

        if(!teacher_id || !mission_id) {
            res.statusCode = 400;
            throw new Error("Preencha todos os campos")
        }

        await addTeacherMissionData(teacher_id, mission_id)

        res.status(200).send({message: "O estudante foi inserido na turma"})
        
    } catch (error) {
        res.status(400).send(error.message)

    }

}