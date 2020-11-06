import {connection} from "../index"

export const addTeacherMissionData = async(teacher_id:number, mission_id:number):Promise<any> => {

    const result = await connection
    .insert({
        teacher_id:teacher_id,
        mission_id:mission_id
    })
    .into("Relation_Teacher_Mission")

    return result

}