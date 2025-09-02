import GameDetailsPage from "@/pages/GameDetailsPage";
import HomePage from "@/pages/HomePage";
import Layout from "@/pages/Layout";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/game-search",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "games/:slug",
				element: <GameDetailsPage />,
			},
		],
	},
]);
export default router;
