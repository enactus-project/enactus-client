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
}: Props) => {


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
			
			</CommonTable>
		</div>
	)
}

export default CuratorStudentsTable