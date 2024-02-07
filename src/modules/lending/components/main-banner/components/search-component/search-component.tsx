import { Input } from "antd"
import styles from './search-component.module.css'
const {Search} = Input
export const SearchComponent = () => {
    return (
        <Search placeholder="Поиск..." className={styles.search} allowClear enterButton="Искать" size="large" loading={false} />
    )
}