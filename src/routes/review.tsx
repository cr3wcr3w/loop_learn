import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/review")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="p-2">
			<h3>Welcome Review!</h3>
		</div>
	);
}
