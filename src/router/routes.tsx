import App from "@/App"
import { HeaderLayout } from "@/common/layouts/header-layout"
import NavigationLayout from "@/common/layouts/navigation-layout"
import { MainBanner } from "@/modules/lending/components/main-banner/main-banner"
import ListStudentsView from "@/modules/students/views/list-subjects-view"
import { RouteObject } from "react-router-dom"

export const routes: RouteObject[] = [
	{
		children: [
			{
				element: <HeaderLayout />,
				path: "/",
				children: [
					{
						element: <MainBanner/>,
						path: '/'
					},
				],
			},
			{
				path:'/',
				element: <NavigationLayout/>,
				children:[
					{
						element: <ListStudentsView />,
						path: "/platform",
					}
				]
			},

		]
	},
]
