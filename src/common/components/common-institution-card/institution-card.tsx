import styles from "./institution-card.module.css"
import { InstitutionCardProps } from "./institution-card.types"
import {
	happyIMG,
	sadIMG,
	peopleIMG,
	dollaSignImg,
} from "./institutiion-card.images"
import { Divider } from "antd"

export const InstituionCard = ({
	title,
	description,
	thumbnail,
	rating,
	reviews,
	price,
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
					<div className={styles.rating}>
						<div>{rating}</div>
						{rating >= 7 ? (
							<img src={happyIMG} className={styles.image_styling} />
						) : (
							<img src={sadIMG} className={styles.image_styling} />
						)}
					</div>

					<div className={styles.review}>
						<div className={styles.review}>{reviews}</div>
						<img src={peopleIMG} className={styles.image_styling} />
					</div>
					<div className={styles.pricing}>
						{price <= 10000 ? (
							<div className={styles.price_img}>
								<img src={dollaSignImg} className={styles.image_styling} />
								<img src={dollaSignImg} className={styles.image_styling} />
							</div>
						) : (
							<div className={styles.price_img}>
								<img src={dollaSignImg} className={styles.image_styling} />
								<img src={dollaSignImg} className={styles.image_styling} />
								<img src={dollaSignImg} className={styles.image_styling} />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
// i need to add images for smile and sad
