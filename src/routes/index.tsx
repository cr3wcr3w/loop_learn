import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Loading from "@/shared/components/custom/loading";
import { WelcomeMessage } from "@/shared/components/custom/welcomeMessage";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const [isWelcomeStatus, setIsWelcomeStatus] = useState<boolean>(true);

	if (isWelcomeStatus) {
		return <WelcomeMessage setIsWelcomeStatus={setIsWelcomeStatus} />;
	}

	return (
		<>
			<div className="flex gap-2">
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

			<div className="p-2">
				<h3>Welcome Home!</h3>
			</div>

			<Loading />
		</>
	);
}
