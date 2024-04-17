import { Student } from "./student"

export class Class {
	id: string
	name?: string
	curator_id: string
	students: Student[]

	constructor(id: string, curator_id: string, students: Student[]) {
		this.id = id
		this.curator_id = curator_id
		this.students = students
	}
}
