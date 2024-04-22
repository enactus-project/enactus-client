import React, { useState, useRef } from "react"
import styles from "./video-page.module.css"
import { Tag } from "antd"
interface VideoItem {
	id: number
	location: string
	videoUrl: string
	isSuspicious: boolean
	mood: number
}

const videoData: VideoItem[] = [
	{
		id: 1,
		location: "1-etaj",
		videoUrl: "https://diplomka-s3-db.s3.eu-west-3.amazonaws.com/video2.mp4",
		isSuspicious: true,
		mood: 4,
	},
	{
		id: 2,
		location: "1-etaj",
		videoUrl: "https://diplomka-s3-db.s3.eu-west-3.amazonaws.com/video1.mp4",
		isSuspicious: false,
		mood: 2,
	},
	{
		id: 3,
		location: "t-3",
		videoUrl: "https://www.youtube.com/embed/H4gbVsnQD6w",
		isSuspicious: false,
		mood: 1,
	},
]

const VideoPage: React.FC = () => {
	const [expandedId, setExpandedId] = useState<number | null>(null)

	const videoRef = useRef<HTMLIFrameElement>(null)

	const handleRowClick = (id: number) => {
		setExpandedId(id === expandedId ? null : id)
	}

	const getMoodColor = (mood: number) => {
		switch (mood) {
			case 1:
				return "green"
			case 2:
				return "blue"
			case 3:
				return "yellow"
			case 4:
				return "red"
			default:
				return "gray"
		}
	}

	const getMoodText = (mood: number) => {
		switch (mood) {
			case 1:
				return "Счастливый"
			case 2:
				return "Нейтральный"
			case 3:
				return "Грустный"
			case 4:
				return "Злой"
			default:
				return "Неизвестно"
		}
	}

	const susColor = (isSuspicious: boolean) => {
		if (isSuspicious) {
			return "red"
		} else if (!isSuspicious) {
			return "green"
		}
	}

	return (
		<div className={styles["faq-table-container"]}>
			<table className={styles["faq-table"]}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Расположение</th>
						<th>Подозрительные действия</th>
						<th>Настроение</th>
					</tr>
				</thead>
				<tbody>
					{videoData.map((item) => (
						<React.Fragment key={item.id}>
							<tr
								className={`${styles["faq-row"]} ${
									expandedId === item.id ? styles["expanded"] : ""
								}`}
								onClick={() => handleRowClick(item.id)}
							>
								<td>{item.id}</td>
								<td>{item.location}</td>
								<td>
									<Tag color={susColor(item.isSuspicious)}>
										{item.isSuspicious ? "Да" : "Нет"}
									</Tag>
								</td>
								<td>
									<Tag color={getMoodColor(item.mood)}>
										{getMoodText(item.mood)}
									</Tag>
								</td>
							</tr>
							{expandedId === item.id && (
								<tr>
									<td colSpan={4}>
										<div className={styles["faq-expanded-content"]}>
											<div className={styles["faq-video-container"]}>
												<iframe
													ref={videoRef}
													title={`Video ${item.id}`}
													src={item.videoUrl}
													allowFullScreen
													style={{ width: "100%" }}
												></iframe>
											</div>
										</div>
									</td>
								</tr>
							)}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default VideoPage
