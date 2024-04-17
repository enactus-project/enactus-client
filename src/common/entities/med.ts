export class Med {
	constructor(
		public id: string,
		public student_id: string | null = null,
		public nurse_id: string | null = null,
		public daytime: string = "",
		public description: string | null = null,
		public drugs: string | null = null,
		public isAbsent: boolean | null = null,
		public updatedAt: string = ""
	) {}
}
