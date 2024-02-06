import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardComponent from "./common-card/card"
import styles from "./card-carousel.module.css"
import { fake_data } from "./card-carousel.storage"
import { CardCarouselProps } from "./card-carousel.types"

function CarouselComponent({ title }: CardCarouselProps) {
	const settings = {
		dots: true,
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
	}

	return (
		<>
			<p className={styles.slider_header}>{title}</p>

			<div className="slider-container">
				<Slider {...settings}>
					{fake_data.map(({ id, name, image }) => (
						<CardComponent key={id} name={name} cardicon={image} />
					))}
				</Slider>
			</div>
		</>
	)
}

export default CarouselComponent
