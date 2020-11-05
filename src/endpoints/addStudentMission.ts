import {Response,Request} from "express"
import { addStudentMissionData } from "../data/addStudentMissionData";


export const addStudentMission = async(req:Request, res:Response):Promise<void> => {

    try {

        const {student_id, mission_id} = req.body

        if(!student_id || !mission_id) {
            res.statusCode = 400;
            throw new Error("Preencha todos os campos")
        }

        await addStudentMissionData(student_id, mission_id)

        res.status(200).send({message: "O estudante foi inserido na turma"})
        
    } catch (error) {
        res.status(400).send(error.message)

    }

}
