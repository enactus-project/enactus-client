import { useRef } from "react"
import { FaqItemProps } from "./extended-faq-item.types"
import "./extended-faq-item.css"
export const AccordionItem = ({ faqItem, onClick, isOpen }: FaqItemProps) => {
	const itemRef = useRef(null)
	return (
		<li className="accordion_item">
			<button className="accordion_header" onClick={() => onClick()}>
				{faqItem.q}
			</button>
			<div
				className="accordion_collapse"
				style={
					isOpen
						? { height: itemRef.current?.scrollHeight }
						: {
								height: "0px",
						  }
				}
			>
				<div className="accordion_body" ref={itemRef}>
					{faqItem.a}
				</div>
			</div>
		</li>
	)
}
