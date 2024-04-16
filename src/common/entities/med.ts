export interface MedData {
	id: string
	student_id: string | null
	nurse_id: string | null
	daytime: string
	description: string | null
	drugs: string | null
	isAbsent: boolean | null
	updatedAt: string
}

export class Med {
	id: string
	student_id: string | null
	nurse_id: string | null
	daytime!: string
	description: string | null
	drugs: string | null
	isAbsent: boolean | null
	updatedAt: string

	constructor(medData: MedData) {
		this.id = medData.id
		this.student_id = medData.student_id
		this.nurse_id = null
		this.daytime = medData.daytime
		this.description = medData.description
		this.drugs = medData.drugs
		this.isAbsent = null
		this.updatedAt = medData.updatedAt
	}
}
