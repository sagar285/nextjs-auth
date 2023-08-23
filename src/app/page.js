"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
	const { data: session, status } = useSession();
	return (
		<>
			<h2>Home Page</h2>
			<p>
				{status === "authenticated" && (
					<p>
						<strong>
							Welcome back {session?.user?.name ?? "guest"}!
						</strong>
					</p>
				)}
			</p>
		</>
	);
}
