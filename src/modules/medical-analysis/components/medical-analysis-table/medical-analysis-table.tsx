import { Tag } from "antd"
import { PaginationMeta } from "@/common/entities"
import { MedData } from "@/common/entities/med"
import CommonTable from "@/common/components/common-table"
import styles from "./medical-analysis-table.module.css"

interface Props {
	med?: MedData
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
			nurse_id: "4177-b6eb-5940086cb446",
			daytime: "12:12",
			description: "Повышенная температура",
			drugs: "Парацетамол",
			isAbsent: true,
			updatedAt: "2023-04-06",
		},
		{
			id: "2",
			student_id: "47dee995-aafb-4177-b6eb-5940086cb446",
			nurse_id: "f8c3-3b19-4c752b4a80ea",
			daytime: "13:02",
			description: "Головная боль",
			drugs: "Нурофен",
			isAbsent: false,
			updatedAt: "2024-03-21",
		},
		{
			id: "3",
			student_id: "47dee995-aafb-4177-b6eb-5940086cb446",
			nurse_id: "d2fa-8a72-13184e4fcd5d",
			daytime: "9:51",
			description: "Головная боль",
			drugs: "Ибупрофен",
			isAbsent: false,
			updatedAt: "2024-03-02",
		},
		{
			id: "4",
			student_id: "47dee995-aafb-4177-b6eb-5940086cb446",
			nurse_id: "b0bc-9e23-9255be1a6bfa",
			daytime: "14:20",
			description: "Пищевое отравление",
			drugs: "Активированный Уголь",
			isAbsent: true,
			updatedAt: "2024-02-26",
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
					<CommonTable.Cell>Дата</CommonTable.Cell>
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
									<Tag color="green">
										Да
									</Tag>
								) : (
									<Tag color="red">
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
