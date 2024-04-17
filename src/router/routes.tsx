import App from "@/App"
import AuthGuardLayout from "@/common/layouts/auth-guard-layout"
import ModalLayout from "@/common/layouts/modal-layout"
import NavigationLayout from "@/common/layouts/navigation-layout"
import NonAuthGuardLayout from "@/common/layouts/non-auth-guard-layout"
import LoginView from "@/modules/auth/view/login-view"
import CuratorCabinet from "@/modules/curator/curator-view"
import DocumentationView from "@/modules/documentation/views/index"
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
								element: <DocumentationView />,
								path: "/documentation",
							},
							{
								element: <CuratorCabinet />,
								path: "/curator",
							},
						],
					},
				],
			},
		],
	},
]
