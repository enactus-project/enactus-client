import { Tag } from "antd"
import { PaginationMeta } from "@/common/entities"
import { Student } from "@/common/entities/student"
import CommonTable from "@/common/components/common-table"
import styles from "./curator-table.module.css"

interface Props {
	students?: Student[]
	isLoading?: boolean
	hasError?: boolean
	paginationMeta?: PaginationMeta
	onPageChange?: (page: number) => void
}

const CuratorStudentsTable = ({
	students = [],
	isLoading = false,
	hasError = false,
	paginationMeta,
	onPageChange = () => ({}),
}: Props) => {
	const getStateLabelPerformance = (performance: number) => {
		switch (performance) {
			case 1:
				return { label: "Отличная", color: "green" }
			case 2:
				return { label: "Хорошая", color: "lime" }
			case 3:
				return { label: "Удовлетворительная", color: "yellow" }
			case 4:
				return { label: "Ниже среднего", color: "orange" }
			case 5:
				return { label: "Плохая", color: "red" }
			default:
				return { label: "-" }
		}
	}

	const getColorForState = (state: number) => {
		switch (state) {
			case 1:
				return { label: "Хороший", color: "cyan" }
			case 2:
				return { label: "Средний", color: "geekblue" }
			case 3:
				return { label: "Сложный", color: "red" }
			default:
				return { label: "-" }
		}
	}

	return (
		<div className={styles.wrapper}>
			<CommonTable>
				<CommonTable.Header className={styles.row}>
					<CommonTable.Cell>ID</CommonTable.Cell>
					<CommonTable.Cell>Фамилия</CommonTable.Cell>
					<CommonTable.Cell>Имя</CommonTable.Cell>
					<CommonTable.Cell>Класс</CommonTable.Cell>
					<CommonTable.Cell>Состояние</CommonTable.Cell>
					<CommonTable.Cell>Успеваемость</CommonTable.Cell>
					<CommonTable.Cell>Дата регистрации</CommonTable.Cell>
				</CommonTable.Header>
				{isLoading && <CommonTable.LoadingIndicator />}
				{!isLoading && hasError && <CommonTable.ErrorPlaceholder />}
				{!isLoading && !hasError && students.length === 0 && (
					<CommonTable.EmptyPlaceholder />
				)}
				{!isLoading &&
					!hasError &&
					students.map((student) => (
						<CommonTable.Row key={student.id} className={styles.row}>
							<CommonTable.IdCell id={student.id} link={student.id}/>
							<CommonTable.Cell className={styles.surname}>
								{student.surname}
							</CommonTable.Cell>
							<CommonTable.Cell className={styles.name}>
								{student.name}
							</CommonTable.Cell>
							<CommonTable.Cell>{student.grade}</CommonTable.Cell>
							<CommonTable.Cell>
								<Tag color={getColorForState(student.state).color}>
									{getColorForState(student.state).label}
								</Tag>
							</CommonTable.Cell>

							<CommonTable.Cell>
								<Tag
									color={getStateLabelPerformance(student.performance).color}
								>
									{getStateLabelPerformance(student.performance).label}
								</Tag>
							</CommonTable.Cell>

							<CommonTable.DateTimeCell>
								{student.created_at}
							</CommonTable.DateTimeCell>
						</CommonTable.Row>
					))}
				{!isLoading && !hasError && paginationMeta && (
					<CommonTable.Pagination
						paginationMeta={paginationMeta}
						onPageChange={onPageChange}
					/>
				)}
			</CommonTable>
		</div>
	)
}

export default CuratorStudentsTable