import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
} from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ColorModeProvider } from "./components/ui/color-mode.tsx"; //
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes.tsx";
const queryClient = new QueryClient();
const config = defineConfig({
	theme: {
		breakpoints: {
			sm: "320px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		semanticTokens: {
			colors: {
				danger: { value: "{colors.red}" },
			},
		},
		keyframes: {
			spin: {
				from: { transform: "rotate(0deg)" },
				to: { transform: "rotate(360deg)" },
			},
		},
	},
});

const system = createSystem(defaultConfig, config);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider value={system}>
				<ColorModeProvider>
					<RouterProvider router={router} />
					<ReactQueryDevtools />
				</ColorModeProvider>
			</ChakraProvider>
		</QueryClientProvider>
	</StrictMode>
);
