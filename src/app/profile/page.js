"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const profile = () => {
	const { data: session, status } = useSession();

	return (
		<>
			<h2>Profile Page</h2>
			<p>
				<strong>Status:</strong> {status}
			</p>
			<p>
				<strong>Session:</strong> {JSON.stringify(session, null, 2)}
			</p>
		</>
	);
};

export default profile;
