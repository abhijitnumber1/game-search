import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
} from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ColorModeProvider } from "./components/ui/color-mode.tsx"; //
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
		<ChakraProvider value={system}>
			<ColorModeProvider>
				<App />
			</ColorModeProvider>
		</ChakraProvider>
	</StrictMode>
);
