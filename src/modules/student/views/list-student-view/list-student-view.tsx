import { useUnauthorizedHandler } from "@/common/api/hooks/use-unauthorized-handler";
import { Student } from "@/common/entities/student";
import { StudentsRepository } from "@/modules/students/data/student.repository";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from './list-student-view.module.css'
import Heading from "../../components/heading";
import { Tabs, TabsProps } from "antd";
import StudentTable from "../../components/student-table";
import AcademicChart from "@/modules/analytics/components/academic-chart";
import CommonBackButton from "@/common/components/common-back-button";

const demoStudent = {
    id: '1',
    name: 'John',
    surname: 'Doe',
    state: 1, // Assuming state values: 1 = Good, 2 = Average, 3 = Difficult
    grade: 'A',
    description: 'A diligent student',
    created_at: '2022-01-01T12:00:00Z', // Sample ISO 8601 timestamp
    updatedAt: '2022-01-02T10:30:00Z', // Sample ISO 8601 timestamp
    deletedAt: null, // Null indicates the student is not deleted
  }

const ListStudentView = () => {
    const [student, setStudent] = useState<Student>(demoStudent)
    const { studentId } = useParams()
    const unauthorizedHandler = useUnauthorizedHandler()

    const studentsRepository = new StudentsRepository()

    useEffect(() => {
        loadStudent(studentId)
    }, [studentId])
    
    const loadStudent = async (studentId?: string) => {    
        try {
            const student = await unauthorizedHandler(studentsRepository.getStudentById(studentId))
            setStudent(student)
        } catch {
            alert("error")
        }
    };

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Присутствие в школе',
          children: <StudentTable student={student}/>
        },
        // {
        //   key: '2',
        //   label: 'Видео-записи',
        //   children: 'Content of Tab Pane 2',
        // },
        {
            key: '3',
            label: 'Аналитика',
            children: <AcademicChart />
        },
    ];
      
    return (
        <div className={styles.container}>
            <CommonBackButton to="/medblock" text="Панель" />
            {/* check the right route for returning back */}
            <Heading student={student}/>
            <div className={styles.tabs}>
                <Tabs
                    defaultActiveKey="1"
                    size="middle"
                    style={{ marginBottom: 32 }}
                    items={items}
                />
            </div>
        </div>
    )
}

export default ListStudentView