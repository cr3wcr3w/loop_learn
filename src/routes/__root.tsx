import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
	<>
		<div className="flex gap-2 p-2">
			<Link to="/" className="[&.active]:font-bold">
				Home
			</Link>{" "}
			<Link to="/question" className="[&.active]:font-bold">
				Question
			</Link>
			<Link to="/review" className="[&.active]:font-bold">
				Review
			</Link>
		</div>
		<hr />
		<Outlet />
		<TanStackRouterDevtools />
	</>
);

export const Route = createRootRoute({ component: RootLayout });
