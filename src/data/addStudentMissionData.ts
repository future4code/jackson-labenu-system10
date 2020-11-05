import {connection} from "../index"

export const addStudentMissionData = async(student_id:number, mission_id:number):Promise<any> => {

    const result = await connection
    .insert({
        student_id:student_id,
        mission_id:mission_id
    })
    .into("Relation_Student_Mission")

    return result

}