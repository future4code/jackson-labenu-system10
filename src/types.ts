export type Student = {
    id: number,
    name: string,
    email: string,
    birth_date: Date,
}

export type Teacher = {
    id: number,
    name: string,
    email: string,
    birth_date: Date,
}

export type Hobby = {
    id: number,
    name: string,
}

export type Speciality = {
    id: number,
    name: string,
} 

export type Mission = {
    id: number,
    name: MISSION,
    start_date: Date,
    end_date: Date,
}

export enum TEACHERSPEC {
    HTML = "HTML",
    REACT = "React",
    CSS = "CSS",
    JAVASCRIPT = "JavaScript",
    TYPESCRIPT = "TypeScript",
    SQL = "SQL"
}