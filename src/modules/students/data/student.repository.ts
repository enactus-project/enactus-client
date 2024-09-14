import {
    request,
    StudentResponse,
  } from '@/common/api';

import { mapStudentResponseToStudent } from '@/common/api/mappers/student.mapper';
import { Student } from '@/common/entities/student';
  
  export class StudentsRepository {
    // async getStudents(): Promise<Student[]> {
    //   const response = await request.get<{
    //     data: { students: StudentResponse[] };
    //   }>('/v1/students');
  
    //   const { students } = response.data.data;
  
    //   return students.map((subject) => mapStudentResponseToStudent(subject));
    // }
    // async getStudents(
    //     { page = 1 } = { page: 1 },
    //   ): Promise<[Student[], PaginationMeta]> {
    //     const response = await request.get<{
    //       data: { meta: PaginationMetaResponse; admins: StudentResponse[] };
    //     }>('/students', {
    //       params: {
    //         page,
    //       },
    //     });
    
    //     const students = response.data.data;
    //     console.log(students, "ADMINS")
    //     return [
    //         students.map((admin) => mapStudentResponseToStudent(admin)),
    //         mapPaginationMetaResponseToPaginationMeta(meta),
    //     ];
    // }
    async getStudents(): Promise<Student[]> {
      const response = await request.get<StudentResponse[]>('/students');
      
      const students = response.data; // The array of student objects
    
      console.log(students, "STUDENTS");
    
      // Map the students to your desired structure
      return students.map((student) => mapStudentResponseToStudent(student));
    }
    


    async getStudentById(studentId?: string): Promise<Student>{
      const response = await request.get(`v1/students/${studentId}`)

      const student = response.data

      return student
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
  