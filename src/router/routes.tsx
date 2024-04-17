import AuthGuardLayout from "@/common/layouts/auth-guard-layout"
import { HeaderLayout } from "@/common/layouts/header-layout"
import ModalLayout from "@/common/layouts/modal-layout"
import NavigationLayout from "@/common/layouts/navigation-layout"
import NonAuthGuardLayout from "@/common/layouts/non-auth-guard-layout"
import ListPsychoStudentsView from "@/modules/psychologist/views/list-psycho-students-view"
import LoginView from "@/modules/auth/view/login-view"
import LoginForm from "@/modules/auth/view/login-view/components/login-form"

import { MainBanner } from "@/modules/lending/components/main-banner/main-banner"
import ListStudentView from "@/modules/student/views/list-student-view/list-student-view"
import ListStudentsView from "@/modules/students/views/list-subjects-view"
import { RouteObject } from "react-router-dom"

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <ModalLayout />,
		children: [
			{
				element: <NonAuthGuardLayout />,
				path: "/",
				children: [
					{
						element: <LoginView />,
						path: "/",
					},
				],
			},
			{
				element: <AuthGuardLayout />,
				path: "/",
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
								element: <ListStudentView/>,
								path: "/students/:studentId"
							},
							

						]
					}
				]
			},
		],
	},
]
