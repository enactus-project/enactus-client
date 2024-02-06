import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardComponent from "./common-card/card"
import styles from "./card-carousel.module.css"
import { fake_data } from "./card-carousel.storage"

function CustomArrows() {
	const settings = {
		dots: true,
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
	}
	return (
		<div>
			<p className={styles.slider_header}>Категории</p>
			<div className="slider-container">
				<Slider {...settings}>
					{fake_data.map(({ id, name, image }) => (
						<CardComponent key={id} name={name} cardicon={image} />
					))}
				</Slider>
			</div>
		</div>
	)
}

export default CustomArrows
