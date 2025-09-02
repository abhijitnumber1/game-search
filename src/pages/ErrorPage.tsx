import NavBar from "@/components/NavBar";
import { Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<NavBar />
			<div>
				{isRouteErrorResponse(error) ? (
					<>
						<Heading>404</Heading>
						<p>Page not found</p>
					</>
				) : (
					<>
						<Heading>500</Heading>
						<p>Something went wrong</p>
					</>
				)}
			</div>
		</>
	);
};

export default ErrorPage;
