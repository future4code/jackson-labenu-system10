import { Request, Response } from "express"
import { getStudentAgeByIdData } from "../data/getStudentAgeByIdData"



export const getStudentAgeById = async (req: Request, res: Response):Promise<void> => {
   try {

      const age = await getStudentAgeByIdData(Number(req.params.id))

      if (age.length === 0) {

        res.status(404).send({meessage: "Aluno não encontrado"})
      } else {
        
        res.status(200).send(age)
      }
   } catch (error) {
      res.send(error.message)
   }
}