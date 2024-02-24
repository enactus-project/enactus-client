import { faqList } from "./extended-faq.storage"
import "./extended-faq.css"
import { useState } from "react"
import { AccordionItem } from "./extended-faq-item/extended-faq-item"
export const Accordion = () => {
	const [openId, setId] = useState(null)

	return (
		<>
			<h1 className="faq_head">FAQ</h1>
			<ul className="accordion">
				{faqList.map((faqItem, id) => {
					return (
						<AccordionItem
							faqItem={faqItem}
							isOpen={id === openId}
							key={id}
							onClick={() => (id === openId ? setId(null) : setId(id))}
						/>
					)
				})}
			</ul>
		</>
	)
}
