import { connection } from "../index";


export const createTeacherData = async (
    id: number,
    name: string,
    email: string,
    birth_date: Date,
  ): Promise<void> => {
    await connection
    .insert({
        id:id,
        name:name,
        email:email,
        birth_date: birth_date
      })
      .into("Teacher");
};