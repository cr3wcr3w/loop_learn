import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { CardDemo } from "./shared/components/custom/cardSample";
import { Button } from "./shared/components/ui/button";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<main>
			<h1>Welcome to Tauri + React</h1>

			<div>
				<a href="https://vite.dev" target="blank">
					<img src="/vite.svg" alt="Vite logo" />
				</a>
				<a href="https://tauri.app" target="blank">
					<img src="/tauri.svg" alt="Tauri logo" />
				</a>
				<a href="https://react.dev" target="blank">
					<img src={reactLogo} alt="React logo" />
				</a>
			</div>
			<p>Click on the Tauri, Vite, and React logos to learn more.</p>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					greet();
				}}
			>
				<input
					id="greet-input"
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder="Enter a name..."
				/>
				<button type="submit">Greet</button>
			</form>
			<Button variant={"default"} size={"sm"}>
				sample
			</Button>
			<Button variant={"destructive"} size={"sm"}>
				sample
			</Button>
			<Button variant={"ghost"} size={"sm"}>
				sample
			</Button>
			<Button variant={"link"} size={"sm"}>
				sample
			</Button>
			<Button variant={"outline"} size={"sm"}>
				sample
			</Button>
			<Button variant={"secondary"} size={"sm"}>
				sample
			</Button>
			<p className="bg-red-900 underline">{greetMsg}</p>
			<section>
				<CardDemo />
			</section>
		</main>
	);
}

export default App;
