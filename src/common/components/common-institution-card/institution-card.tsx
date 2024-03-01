import styles from "./institution-card.module.css"
import { InstitutionCardProps } from "./institution-card.types"

export const InstituionCard = ({
	title,
	description,
	thumbnail,
	rating,
	reviews,
}: InstitutionCardProps) => {
	return (
		<div className={styles.card_wrapper}>
			<div className={styles.image_wrapper}>
				<img src={thumbnail} alt="" className={styles.image} />
			</div>
			<div className={styles.info_wrapper}>
				<div>{title}</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.review_wrapper}>
					<div>{rating}</div>
					{rating && rating >= 7 ? "smile" : "sad"}

					<div>{reviews}</div>
					<div>dollasign</div>
				</div>
			</div>
		</div>
	)
}
// i need to add images for smile and sad
