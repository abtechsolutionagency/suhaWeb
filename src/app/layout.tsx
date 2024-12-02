
"use client"
import Wrapper from "@/layouts/Wrapper";
import "../styles/style.css";
import "../styles/style.scss";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" theme-color="dark">
			<head>
				<title>Suha - Multipurpose Ecommerce Mobile Next js Template</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
					rel="stylesheet"
				/>

			</head>

			<body>
				<Provider store={store}>
					{children}
				</Provider> 
				

			</body>
		</html>
	);
}
