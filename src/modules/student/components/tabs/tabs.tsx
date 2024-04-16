import styles from './tabs.module.css'
import cn from "classnames"
interface ITab{
    id: string | number;
    label: string | number
}

interface ITabProps{
    className?: string
    selectId: number
    tabs: ITab[]
    onClick: (id?: string|number) => void
}

const Tabs = ({className, selectId, tabs, onClick}: ITabProps) => {
    return (
        <div className={cn(styles.container, className)}>
            {tabs && tabs.map(tab => (
                <div className={cn(styles.tab, {
                    [styles.selected_tab]: tab.id == selectId
                })} key={tab.id} onClick={() => onClick(tab.id)}>
                    <div className={cn(styles.tab_title, {
                        [styles.selected_tabLabelf]: tab.id == selectId
                    })}>
                        {tab.label}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tabs