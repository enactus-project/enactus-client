import styles from "./card.module.css"
import { CardComponentProps } from "./card.type"
const CardComponent = ({ name, cardicon }: CardComponentProps) => {
	return (
		<a href="https://google.com" className={styles.card_component}>
			<div className={styles.card_wrapper}>
				<div className={styles.heading}>{name}</div>

				<div className={styles.image_wrapper}>
					<img className={styles.image} src={cardicon} />
				</div>
			</div>
		</a>
	)
}

export default CardComponent
