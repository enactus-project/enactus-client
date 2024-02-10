import styles from "./institution-card.module.css"

export const InstituionCard = () => {
	return (
		<div className={styles.card_wrapper}>
			<div className={styles.image_wrapper}>
				<img
					src="https://zapis.kz/data/pics/salon/pic-103764_small.jpg?v=0"
					alt=""
					className={styles.image}
				/>
			</div>
			<div className={styles.info_wrapper}>
				<div>Name</div>
				<div className={styles.description}>Description</div>
				<div className={styles.review_wrapper}>
					<div>
						10.0
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmtJREFUSEu11UvojmkYBvCfwzhEis3kEMqCMiENK8VKjgk5LFBT04xxiCQL5JDDRkyNQ02zIJTGQmLGZMpCzGyYxqHR5BxmMQtFU4wYPPd0f9M3b9//+3/U/1697/Pez3Pdz31d9/V20sHRqYPP1x5Ad8zFFIzGULzBfVzBDziBl20V2gxgKg7koc0uehtLca5RUlsAW0qlm3PDA3yL73E118ZgJuZjUK6txe4qSCOA2uF/YRFOZ1saFdgZ83AQPbEKX9UnVgGiqlN4XioeVzb/1qIIxuMnBOBEXKztqwfojZvoj8U42uLhtbTV+BK/F+JH1YivB1iG/aWvN/BRtiXeYz3IXl4BjLUvcs8KdEt1RYGzcTLy6wHOIJQTyXFwREiy0W3rv73CB5m0A+vxDT6rAjwqHwZiGO7mhmY32IfP83ZBbsQEXMCvhcuxVYBnqYRQw9/v2P9aej88xhP0rQKELIPoPojn94nY+zT3x/P/OAj2h6cCrqPWslaA/siBi7b8kkIZWQU4ViS2EOuwK8kK0lqJDUVFO7ER2wqPRwqPS6oAof3DuIUReI1L+LgdhMs5lF3L/NzBYCzA8SpAkBttioRPiskdyuewihicRnENM/CwkLsybSKGNfJfVAHifTLOVqyiC9akJD9MlD/LxH9dBLEH/+QNfk6rmJRS/Te1kdlFP7enGsLsvmvSovCeaEcMVq+8RczHf9GWXW8q4Fsz617adUx6tCQsIaxkVjrpgJz4GLa91WKa/XCmZxtiuptF/HA+xflGSe39MnuUqudgWhI3JKsNtYTef0xTCz9qGO0BtDIDTXM6HOAtUK14Gb9TOCAAAAAASUVORK5CYII=" />
					</div>
					<div>people</div>
					<div>dollasign</div>
				</div>
			</div>
		</div>
	)
}
