import { Student } from '@/common/entities/student';
import { StudentResponse } from '../responses/student.response';
export const mapStudentResponseToStudent = (
  payload: StudentResponse,
): Student => ({
  id: payload.id,
  name: payload.name,
  surname: payload.surname,
  iin: payload.iin,
  state: payload.state,
  createdAt: payload.created_at,
  deletedAt: payload.deletedAt,
  updatedAt: payload.updatedAt
});
