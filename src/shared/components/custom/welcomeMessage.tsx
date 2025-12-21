import { Repeat } from "lucide-react";
import * as motion from "motion/react-client";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

type WelcomeMessageType = {
	setIsWelcomeStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WelcomeMessage = ({ setIsWelcomeStatus }: WelcomeMessageType) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="absolute z-50 min-h-dvh w-full bg-gray-600"
		>
			<div className="flex h-dvh items-center justify-center align-middle">
				<motion.div
					initial={{ opacity: 0, scale: 0.8, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 200,
						damping: 20,
					}}
					className="w-full max-w-lg"
				>
					<Card>
						<CardHeader>
							<CardTitle className="text-center">
								<div className="my-3 inline-block">
									<div className="rounded-full border bg-primary/10 p-3">
										<Repeat size={40} />
									</div>
								</div>
								<h1 className="text-center text-2xl text-bold">
									Welcome to LOOP_LEARN
								</h1>
							</CardTitle>
							<CardDescription className="text-center text-lg">
								Master your knowledge through spaced repetition
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
							<p className="bg-gray-600/5 p-2 text-md">
								Create smart flashcards.
							</p>
							<p className="bg-gray-600/5 p-2 text-md">
								Review when it matters most.
							</p>
							<p className="bg-gray-600/5 p-2 text-md">
								See your progress grow.
							</p>
							<p className="bg-gray-600/5 p-2 text-md">
								Remember more, for longer.
							</p>
						</CardContent>
						<CardFooter>
							<Button
								className="w-full cursor-pointer text-md transition duration-300 ease-in-out hover:scale-105"
								onClick={() => setIsWelcomeStatus(false)}
							>
								Get Started
							</Button>
						</CardFooter>
					</Card>
				</motion.div>
			</div>
		</motion.div>
	);
};
