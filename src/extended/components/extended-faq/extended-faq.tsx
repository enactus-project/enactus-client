import { faqList } from "./extended-faq.storage"
import "./extended-faq.css"
import { useState } from "react"
export const Accordion = () => {
	const [openId, setId] = useState(null)
	const clickHandler = (id) => {
		if (id === openId) setId(null)
		else setId(id)
	}

	return (
		<>
		<h1>FAQ</h1>
		<ul className="accordion">
			{faqList.map((faqItem, id) => {
				return (
					<li className="accordion_item" key={id}>
						<button
							className="accordion_header"
							onClick={() => clickHandler(id)}
						>
							{faqItem.q}
						</button>
						<div
							className={`accordion_collapse ${id === openId ? "open" : ""}`}
						>
							<div className="accordion_body">{faqItem.a}</div>
						</div>
					</li>
				)
			})}
		</ul></>
	)
}
