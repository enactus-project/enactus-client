import React, { useState, useRef } from "react"
import styles from "./video-page.module.css" // Import CSS module for styles

interface FAQItem {
	id: number
	location: string
	answer: string
	videoUrl: string
	isSuspicious: boolean // New property
	mood: string // New property
}

const faqData: FAQItem[] = [
	{
		id: 1,
		location: "hb-1",
		answer: "student acted suspicious",
		videoUrl: "https://www.youtube.com/embed/MtB4UdxFspE",
		isSuspicious: true, // Example value
		mood: "Happy", // Example value
	},
	// Add more FAQ items as needed
]

const FAQTable: React.FC = () => {
	const [expandedId, setExpandedId] = useState<number | null>(null)

	const videoRef = useRef<HTMLIFrameElement>(null)

	const handleRowClick = (id: number) => {
		setExpandedId(id === expandedId ? null : id)
	}

	return (
		<div className={styles["faq-table-container"]}>
			<table className={styles["faq-table"]}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Location</th>
						<th>Is Suspicious</th>
						<th>Mood</th>
					</tr>
				</thead>
				<tbody>
					{faqData.map((item) => (
						<React.Fragment key={item.id}>
							<tr
								className={`${styles["faq-row"]} ${
									expandedId === item.id ? styles["expanded"] : ""
								}`}
								onClick={() => handleRowClick(item.id)}
							>
								<td>{item.id}</td>
								<td>{item.location}</td>
								<td>{item.isSuspicious ? "Yes" : "No"}</td>
								<td>{item.mood}</td>
							</tr>
							{expandedId === item.id && (
								<tr>
									<td colSpan={4}>
										<div className={styles["faq-expanded-content"]}>
											<p>{item.answer}</p>
											<div className={styles["faq-video-container"]}>
												<iframe
													ref={videoRef}
													title={`Video ${item.id}`}
													src={item.videoUrl}
													frameBorder="0"
													allowFullScreen
													style={{ width: "100%" }} // Set width to 100%
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

export default FAQTable
