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
			className="nset-0 absolute z-50 min-h-dvh w-full bg-black/50 backdrop-blur-md"
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
					<Card className="bg-white shadow-lg dark:bg-gray-800">
						<CardHeader>
							<CardTitle className="text-center">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.4,
										delay: 0.2,
									}}
									className="my-3 inline-block"
								>
									<div className="rounded-full border bg-primary/10 p-3">
										<Repeat size={40} />
									</div>
								</motion.div>
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.4,
										delay: 0.3,
									}}
									className="text-center text-2xl text-bold"
								>
									Welcome to Loop Learn
								</motion.h1>
							</CardTitle>
							<CardDescription className="text-center text-lg">
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.4,
										delay: 0.3,
									}}
								>
									Master your knowledge through spaced repetition
								</motion.p>
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
							<motion.p
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.3,
									delay: 0.6,
								}}
								className="bg-gray-600/5 p-2 text-md"
							>
								Create smart flashcards.
							</motion.p>
							<motion.p
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.3,
									delay: 0.8,
								}}
								className="bg-gray-600/5 p-2 text-md"
							>
								Review when it matters most.
							</motion.p>
							<motion.p
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.3,
									delay: 1.0,
								}}
								className="bg-gray-600/5 p-2 text-md"
							>
								See your progress grow.
							</motion.p>
							<motion.p
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.3,
									delay: 1.2,
								}}
								className="bg-gray-600/5 p-2 text-md"
							>
								Remember more, for longer.
							</motion.p>
						</CardContent>
						<CardFooter>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: 1.6,
								}}
								className="w-full"
							>
								<Button
									className="w-full cursor-pointer text-md transition duration-300 ease-in-out hover:scale-105"
									onClick={() => setIsWelcomeStatus(false)}
								>
									Get Started
								</Button>
							</motion.div>
						</CardFooter>
					</Card>
				</motion.div>
			</div>
		</motion.div>
	);
};
