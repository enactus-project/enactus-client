import styles from "./documentation-page.module.css"

const DocumentationView = () => {
	return (
		<div className={styles.documentation}>
			<nav className={styles.sidebar}>
				<ul className={styles.sidebarList}>
					<li>Введение</li>
					<li>Обзор системы</li>
					<li>Особенности</li>
					<li>Внедрение системы</li>
				</ul>
			</nav>
			<div className={styles.content}>
				<header className={styles.header}>
					<h1>Документация Tirek System</h1>
				</header>
				<section id="introduction" className={styles.section}>
					<h2>Введение</h2>
					<p>
						Система Tirek - это инновационное средство безопасности,
						разработанное для повышения мер безопасности в образовательных
						учреждениях. Путем использования мощных технологий передовых камер и
						умных алгоритмов мониторинга,с использованием искусственного
						интелекта Tirek стремится обнаруживать и устранять потенциальные
						угрозы до их обострения.
					</p>
				</section>
				<section id="system-overview" className={styles.section}>
					<h2>Обзор системы</h2>
					<p>
						Система Tirek использует сеть высококачественных камер высокой
						четкости, стратегически размещенных на территории школы. Эти камеры
						оборудованы сложными возможностями обработки изображений, что
						позволяет им захватывать и анализировать различные действия в
						реальном времени.
					</p>
				</section>
				<section id="key-features" className={styles.section}>
					<h2>Ключевые особенности</h2>
					<p>
						<strong>Обнаружение угроз:</strong> Tirek использует алгоритмы
						искусственного интеллекта для анализа видеопотоков и выявления
						поведения, которое может представлять угрозу для безопасности школы.
						Это включает, но не ограничивается следующим:
					</p>
					<ul>
						<li>Акты агрессии или насилия</li>
						<li>Владение оружием или опасными предметами</li>

						<li>Несанкционированный доступ к ограниченным зонам</li>
						<li>
							Домогательства или харассмент учеников по отношению друг к другу
						</li>
					</ul>
					<p>
						<strong>Механизм оповещения:</strong> При обнаружении потенциальной
						угрозы система Tirek мгновенно запускает оповещения назначенному
						охранному персоналу или правоохранительным органам. Эти оповещения
						сопровождаются видеозаписью в реальном времени и данными о
						местоположении, обеспечивая быстрый ответ и вмешательство.
					</p>
					<p>
						<strong>Возможность кастомизации:</strong> Администраторы имеют
						возможность настраивать политики обнаружения угроз в соответствии с
						конкретными требованиями безопасности и профилями риска. Это
						включает определение пороговой силы для различных типов угроз и
						регулирование уровней чувствительности для точного обнаружения.
					</p>
				</section>
				<section id="implementation" className={styles.section}>
					<h2>Внедрение системы</h2>
					<h3>Требования к оборудованию</h3>
					<p>
						Для работы системы Tirek необходима установка камер наблюдения
						высокого качества, способных захватывать четкое и детализированное
						видео в различных условиях освещения. Кроме того, должна быть
						обеспечена достаточная сетевая инфраструктура для обеспечения
						бесперебойной передачи и обработки данных.
					</p>
					<p>
						<strong>Интеграция программного обеспечения:</strong> Система Tirek
						интегрируется без проблем с существующими системами управления
						безопасностью и программным обеспечением, обычно используемыми в
						образовательных учреждениях. Это обеспечивает совместимость и
						взаимодействие, обеспечивая эффективное обмен данными и
						централизованный мониторинг.
					</p>
				</section>
			</div>
		</div>
	)
}

export default DocumentationView
