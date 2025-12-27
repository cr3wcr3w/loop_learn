import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WelcomeMessage } from "@/shared/components/custom/welcomeMessage";
import { Button } from "@/shared/components/ui/button";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const [isWelcomeStatus, setIsWelcomeStatus] = useState<boolean>(true);

	if (isWelcomeStatus) {
		return <WelcomeMessage setIsWelcomeStatus={setIsWelcomeStatus} />;
	}

	return (
		<main className="h-dvh bg-background p-5">
			<h3 className="font-bold text-2xl">Welcome to Loop Learn!</h3>
			<ul className="flex items-center justify-between">
				<li>
					<p>Select a category to start reviewing</p>
				</li>
				<li>
					<Button variant="outline" className="cursor-pointer">
						Manage Questions
					</Button>
				</li>
			</ul>
		</main>
	);
}
