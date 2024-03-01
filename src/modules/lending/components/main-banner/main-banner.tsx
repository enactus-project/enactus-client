import { SearchComponent } from "./components/search-component/search-component"
import styles from "./main-banner.module.css"
import { CarouselComponent } from "@/common/components/common-card-carousel"
import { InstituionCard } from "@/common/components/common-institution-card/institution-card"

export const MainBanner = () => {
	return (
		<aside className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.left_side}>
					<h1 className={styles.heading}>
						Онлайн-поиск <br /> в сфере ментального <br /> здоровья
					</h1>
					<div className={styles.search}>
						<span>Социальная поддержка помогает справиться с депрессией</span>
						<SearchComponent />
					</div>
				</div>
				<div className={styles.right_side}>
					<img src="/lending.png" alt="Main" />
				</div>
			</div>
			<CarouselComponent title={"Категории"} />

			<div>
				<InstituionCard
					title={"1337 mental"}
					description={"best place in the world"}
					thumbnail={
						"https://zapis.kz/data/pics/salon/pic-103764_small.jpg?v=0"
					}
					rating={7.8}
					reviews={"ok"}
				/>
			</div>
		</aside>
	)
}
