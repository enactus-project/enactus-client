export class Health {
	constructor(
		public id: string,
		public studentId: string | null,
		public daytime: string,
		public student_mood: string | null,
		public student_action: string | null,
		public student_overall: number | null,
		public kundelik_overall: number | null,
		public overall: number | null,
		public createdAt: string,
		public updatedAt: string,
		public deletedAt: string | null
	) {}
}
