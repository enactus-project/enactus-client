
import ModalLayout from "@/common/layouts/modal-layout"
import NavigationLayout from "@/common/layouts/navigation-layout"

import ListPsychoStudentsView from "@/modules/psychologist/views/list-psycho-students-view"
import ListStudentView from "@/modules/student/views/list-student-view/list-student-view"
import ListStudentsView from "@/modules/students/views/list-subjects-view"
import { RouteObject } from "react-router-dom"
import DocumentationView from "@/modules/documentation/views"
import ListBasicMoodsView from "@/modules/basicMoods/views/basic-moods"
import ListDangerMoodsView from "@/modules/dangerMoods/views"

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <ModalLayout />,
		children: [
			{
				children: [
					{
						element: <NavigationLayout />,
						path: "/",
						children: [
							{
								element: <ListStudentsView />,
								path: "/medblock",
							},
							{
								element: <ListPsychoStudentsView />,
								path: "/psychologist",
							},
							{
								element: <ListStudentView />,
								path: "/students/:studentId",
							},
							{
								element: <DocumentationView />,
								path: "/documentation",
							},
							{
								element: <ListBasicMoodsView/>,
								path: "/basic-moods"
							},
							{
								element: <ListDangerMoodsView/>,
								path: "/danger-moods"
							}
							
						]
					}
				]
			},
		],
	},
]
