import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardComponent from "./common-card/card"
import styles from "./carousel.module.css"
import { fake_data } from "./carousel.storage"
import { CardCarouselProps } from "./carousel.types"

export const CarouselComponent = ({ title }: CardCarouselProps) => {
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

