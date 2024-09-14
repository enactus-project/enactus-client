import { useUnauthorizedHandler } from "@/common/api/hooks/use-unauthorized-handler"
import { Student } from "@/common/entities/student"
import { StudentsRepository } from "@/modules/students/data/student.repository"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./list-student-view.module.css"
import Heading from "../../components/heading"
import { Tabs, TabsProps } from "antd"
import StudentTable from "../../components/student-table"
import AcademicChart from "@/modules/analytics/components/academic-chart"
import CommonBackButton from "@/common/components/common-back-button"
import MedicalAnalysisTable from "@/modules/medical-analysis/components/medical-analysis-table"
import VideoPage from "@/modules/video-page/components/video-page"
import CodeModal from "../../components/code-modal"


const demoStudent = {
  class: "12B", // Student's class
  firstName: "Yerdaulet",
  lastName: "Damir",
  overallHealth: 1, // Example health rating (1 = good)
  overallKundelik: 1, // Example academic performance rating (1 = excellent)
  overallMood: 0, // Example mood rating (0 = neutral)
  photoUrl: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png", // Photo URL
};


const ListStudentView = () => {
	const [student, setStudent] = useState<Student>(demoStudent)
	const { studentId } = useParams()
	const unauthorizedHandler = useUnauthorizedHandler()
	const [isEditDescriptionModalSubmitLoading, setIsEditDescriptionModalSubmitLoading] =
	useState<boolean>(false);
	const [editingDescription, setEditingDescription] = useState<Student| null>(null);
	const [isEditDescriptionModalVisible, setIsEditDescriptionModalVisible] =
	  useState<boolean>(false);
	const [isCodeModalVisible, setIsCodeModalVisible] =
	  useState<boolean>(false);
	const [isCreateStudentModalSubmitLoading, setIsCreateStudentModalSubmitLoading] =
	  useState<boolean>(false);
  
	const handleCreateStudentModalClose = () => {
	  setIsCodeModalVisible(false);
	};
	const studentsRepository = new StudentsRepository()

	useEffect(() => {
		loadStudent(studentId)
	}, [studentId])

	useEffect(() => {
		setIsCodeModalVisible(true)
	}, [])

	const handleCodeSubmit = () => {
		setIsCodeModalVisible(false)
	}

	const loadStudent = async (studentId?: string) => {
		try {
			const student = await unauthorizedHandler(
				studentsRepository.getStudentById(studentId)
			)
			setStudent(student)
		} catch {
			alert("error")
		}
	}

	const items: TabsProps["items"] = [
		{
			key: "1",
			label: "Присутствие в школе",
			children: <StudentTable student={student} />,
		},
		{
			key: "2",
			label: "Видео-записи",
			children: <VideoPage />,
		},
		{
			key: "3",
			label: "Аналитика",
			children: <AcademicChart />,
		},

		{
			key: "4",
			label: "Медицинский Анализ",
			children: <MedicalAnalysisTable />,
		},
	]

	return (
		<div className={styles.container}>
			<CodeModal
				title="Ввести код"
				visible={isCodeModalVisible}
				submitLoading={isCreateStudentModalSubmitLoading}
				submitText="Ввод"
				onSubmit={handleCodeSubmit}
				onCancel={handleCreateStudentModalClose}
      		/>
			{isCodeModalVisible ? (<div></div>) : (<div>
				<CommonBackButton to="/medblock" text="Панель" />
			{/* check the right route for returning back */}
			<Heading student={student} />
			<div className={styles.tabs}>
				<Tabs
					defaultActiveKey="1"
					size="middle"
					style={{ marginBottom: 32 }}
					items={items}
				/>
			</div>
			</div>)}
		</div>
	)
}

export default ListStudentView
