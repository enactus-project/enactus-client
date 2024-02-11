import App from "@/App"
import { HeaderLayout } from "@/common/layouts/header-layout"
import { MainBanner } from "@/modules/lending/components/main-banner/main-banner"
import { RouteObject } from "react-router-dom"

export const routes: RouteObject[] = [
	{
		children: [
			{
				element: <MainBanner />,
				path: "/",
			},
		],
		element: <HeaderLayout />,
		path: "/",
	},
]
