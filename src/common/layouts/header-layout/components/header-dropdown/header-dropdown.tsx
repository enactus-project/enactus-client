import { Button, Dropdown } from "antd";
import { HeaderDropDownProps } from "./header-dropdown.types";
import classNames from "classnames";
import styles from './header-dropdown.module.css'

export const HeaderDropDown = ({items, className, title}: HeaderDropDownProps) => {
    return (
        <Dropdown className={classNames(styles.dropdown, className)} menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: false }} >
            <Button className={styles.button}>{title}</Button>
        </Dropdown>
    )
}