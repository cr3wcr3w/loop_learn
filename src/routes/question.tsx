import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/question")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="p-2">
			<h3>Welcome Question!</h3>
		</div>
	);
}
