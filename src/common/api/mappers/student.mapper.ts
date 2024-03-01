import { Student } from '@/common/entities/student';
import { StudentResponse } from '../responses/student.response';
export const mapStudentResponseToStudent = (
  payload: StudentResponse,
): Student => ({
  id: payload.id,
  name: payload.name,
  surname: payload.surname,
  state: payload.state,
  description: payload.description,
  created_at: payload.created_at,
  deletedAt: payload.deletedAt,
  updatedAt: payload.updatedAt
});
