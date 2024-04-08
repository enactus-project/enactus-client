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
        console.log(admins, "ADMINS")
        return [
            admins.map((admin) => mapStudentResponseToStudent(admin)),
            mapPaginationMetaResponseToPaginationMeta(meta),
        ];
    }

    
    async updateStudentById(
        studentId: string,
        payload: { name: string, surname: string, state: number, description: string },
    ): Promise<Student> {
        const response = await request.patch<{
        data: { student: StudentResponse };
        }>(`/v1/topics/${studentId}`, payload);

        return mapStudentResponseToStudent(response.data.data.student);
    }

    async createStudent(payload: { name: string, surname: string, state: number, description: string }) {
        const response = await request.post('/v1/students', payload);
        console.log(response.data, "RESPONSE")
        return mapStudentResponseToStudent(response.data.data.student);
    }

    // async deleteTopicById(topicId: string): Promise<void> {
    //     await request.delete(`/v1/topics/${topicId}`);
    // }
  }
  