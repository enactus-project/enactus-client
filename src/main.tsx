import ReactDOM from "react-dom/client"
import { ConfigProvider } from "antd"

import "@/common/styles/base.css"
import "@/common/styles/variables.css"
import { MobileBlockerLayout } from "./common/layouts/mobile-blocker-layout/mobile-blocker-layout.tsx"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { Provider } from "react-redux"
import { store } from "./store/index.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<ConfigProvider
			theme={{
				components: {
					Button: {
						defaultHoverColor: "#000",
					},
				},
			}}
		>
			<MobileBlockerLayout>
				<RouterProvider router={router} />
			</MobileBlockerLayout>
		</ConfigProvider>
	</Provider>
)
