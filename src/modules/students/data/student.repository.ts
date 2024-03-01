import {
    request,
    StudentResponse,
  } from '@/common/api';
import { mapPaginationMetaResponseToPaginationMeta } from '@/common/api/mappers/pagination-meta.mapper';
import { mapStudentResponseToStudent } from '@/common/api/mappers/student.mapper';
import { PaginationMetaResponse } from '@/common/api/responses/pagination-meta.response';
import { PaginationMeta } from '@/common/entities';
import { Student } from '@/common/entities/student';
  
  export class StudentsRepository {
    // async getStudents(): Promise<Student[]> {
    //   const response = await request.get<{
    //     data: { students: StudentResponse[] };
    //   }>('/v1/students');
  
    //   const { students } = response.data.data;
  
    //   return students.map((subject) => mapStudentResponseToStudent(subject));
    // }
    async getStudents(
        { page = 1 } = { page: 1 },
      ): Promise<[Student[], PaginationMeta]> {
        const response = await request.get<{
          data: { meta: PaginationMetaResponse; admins: StudentResponse[] };
        }>('/v1/students', {
          params: {
            page,
          },
        });
    
        const { meta, admins } = response.data.data;
    
        return [
          admins.map((admin) => mapStudentResponseToStudent(admin)),
          mapPaginationMetaResponseToPaginationMeta(meta),
        ];
      }
  }
  