// import { Student } from '@/common/entities/student';
// import { StudentResponse } from '../responses/student.response';
// export const mapStudentResponseToStudent = (
//   payload: StudentResponse,
// ): Student => ({
//   id: payload.id,
//   name: payload.name,
//   surname: payload.surname,
//   iin: payload.iin,
//   state: payload.state,
//   createdAt: payload.created_at,
//   deletedAt: payload.deletedAt,
//   updatedAt: payload.updatedAt
// });

import { Student } from '@/common/entities/student';
import { StudentResponse } from '../responses/student.response';

export const mapStudentResponseToStudent = (
  payload: StudentResponse,
): Student => ({
  class: payload.class,
  firstName: payload.first_name,
  lastName: payload.last_name,
  overallHealth: payload.overall_health,
  overallKundelik: payload.overall_kundelik,
  overallMood: payload.overall_mood,
  photoUrl: payload.photo_url,
});
