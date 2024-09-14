import { HeaderProps } from "./header.types";
import styles from './header.module.css'
import { HeaderAvatar } from "@/common/layouts/header-layout/components/header-avatar";
import CommonPageTitle from "@/common/components/common-page-title";
export const Header = (({user, onLogout, subtitle}: HeaderProps) => {
    return (
        <header className={styles.wrapper}>
            <CommonPageTitle>Данные учеников - <span className={styles.sub_title}>*{subtitle}</span></CommonPageTitle>
            <div className={styles.header_wrapper}>
                <HeaderAvatar user={user} onLogout={onLogout}/>
            </div>
        </header>
    )
})
