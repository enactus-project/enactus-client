export interface Health {
	id: string
	studentId: string | null
	daytime: string
	student_mood: string | null
	student_action: string | null
	student_overall: number | null
	kundelik_overall: number | null
	overall: number | null
	createdAt: string
	updatedAt: string
	deletedAt: string | null
}

export interface HealthData {
	studentId: string | null
	daytime: string
	student_mood: string | null
	student_action: string | null
	student_overall: number | null
	kundelik_overall: number | null
	createdAt: string
	overall: number | null
}
