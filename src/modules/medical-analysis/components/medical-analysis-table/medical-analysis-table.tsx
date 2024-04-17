import { Tag } from "antd"
import { PaginationMeta } from "@/common/entities"
import { MedData } from "@/common/entities/med"
import CommonTable from "@/common/components/common-table"
import styles from "./medical-analysis-table.module.css"

interface Props {
	med: MedData
	isLoading?: boolean
	hasError?: boolean
	paginationMeta?: PaginationMeta
	onPageChange?: (page: number) => void
}

const MedicalAnalysisTable = ({
	med,
	isLoading = false,
	hasError = false,
	paginationMeta,
	onPageChange = () => {},
}: Props) => {
	const demoMeds: MedData[] = [
		{
			id: "1",
			student_id: "47dee995-aafb-4177-b6eb-5940086cb446",
			nurse_id: "002",
			daytime: "Утро",
			description: "Повышенная температура",
			drugs: "Парацетамол",
			isAbsent: true,
			updatedAt: "2023-12-06",
		},
		{
			id: "2",
			student_id: "47dee995-aafb-4177-b6eb-5940086cb446",
			nurse_id: "003",
			daytime: "Обед",
			description: "Головная боль",
			drugs: "Нурофен",
			isAbsent: false,
			updatedAt: "2024-02-04",
		},
		{
			id: "3",
			student_id: "47dee995-aafb-4177-b6eb-5940086cb446",
			nurse_id: "002",
			daytime: "Утро",
			description: "Головная боль",
			drugs: "Ибупрофен",
			isAbsent: false,
			updatedAt: "2024-03-02",
		},
		{
			id: "4",
			student_id: "47dee995-aafb-4177-b6eb-5940086cb446",
			nurse_id: "001",
			daytime: "Вечер",
			description: "Пищевое отравление",
			drugs: "Активированный Уголь",
			isAbsent: true,
			updatedAt: "2024-04-16",
		},
	]

	return (
		<div className={styles.wrapper}>
			<CommonTable>
				<CommonTable.Header className={styles.row}>
					<CommonTable.Cell>Student ID</CommonTable.Cell>
					<CommonTable.Cell>Nurse ID</CommonTable.Cell>
					<CommonTable.Cell>Время дня</CommonTable.Cell>
					<CommonTable.Cell>Описание</CommonTable.Cell>
					<CommonTable.Cell>Медикаменты</CommonTable.Cell>
					<CommonTable.Cell>Ушел домой</CommonTable.Cell>
					<CommonTable.Cell>Последнее обновление</CommonTable.Cell>
				</CommonTable.Header>
				{isLoading && <CommonTable.LoadingIndicator />}
				{!isLoading && hasError && <CommonTable.ErrorPlaceholder />}
				{!isLoading &&
					!hasError &&
					demoMeds.map((med) => (
						<CommonTable.Row key={med.id} className={styles.row}>
							<CommonTable.Cell>{med.student_id || ""}</CommonTable.Cell>
							<CommonTable.Cell>{med.nurse_id || ""}</CommonTable.Cell>
							<CommonTable.Cell>{med.daytime}</CommonTable.Cell>
							<CommonTable.Cell>{med.description || ""}</CommonTable.Cell>
							<CommonTable.Cell>{med.drugs || ""}</CommonTable.Cell>
							<CommonTable.Cell>
								{med.isAbsent ? (
									<Tag color="green" shape="square">
										Да
									</Tag>
								) : (
									<Tag color="red" shape="square">
										Нет
									</Tag>
								)}
							</CommonTable.Cell>
							<CommonTable.Cell>{med.updatedAt}</CommonTable.Cell>
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

export default MedicalAnalysisTable
