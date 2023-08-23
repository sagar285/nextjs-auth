"use client";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar({ children }) {
	const { data: session, status } = useSession();
	const [isLogin, setIsLogin] = useState(false);

	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, [session]);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>

					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Button color="inherit" onClick={() => router.push("/")}>
							{" "}
							Home{" "}
						</Button>
					</Typography>
					{isLogin ? (
						<>
							{pathname === "/" ? (
								<Button
									color="inherit"
									onClick={() => router.push(`/profile`)}
								>
									Profile
								</Button>
							) : (
								<Button
									color="inherit"
									onClick={() => {
										router.push(`/`);
									}}
								>
									Home
								</Button>
							)}
							<Button color="inherit" onClick={() => signOut()}>
								Logout
							</Button>
						</>
					) : (
						<Button color="inherit" onClick={() => signIn("google")}>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
			{children}
		</Box>
	);
}
