// export interface Student {
// 	id: string
// 	name: string | null
// 	surname: string
// 	state: number
// 	grade: string
// 	description: string
// 	performance: number
// 	created_at: string
// 	updatedAt: string
// 	deletedAt: string | null
// }
// export interface Student {
//     id: string;
//     name?: string;
//     surname: string;
//     state: number;
//     iin: string;
//     vk?: string; // Optional fields
//     insta?: string;
//     tiktok?: string;
//     createdAt: string;
//     updatedAt: string;
//     deletedAt: string | null;
// }

export interface Student {
    class: string;
    firstName: string;
    lastName: string;
    overallHealth: number;
    overallKundelik: number;
    overallMood: number;
    photoUrl: string;
  }
  