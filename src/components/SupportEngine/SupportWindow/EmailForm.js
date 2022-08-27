import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { styles } from "../styles";
import Avatar from "../Avatar";

function EmailForm() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log("sending email", email);
	};

	return (
		<div
			style={{
				...styles.emailFormWindow,
				...{ height: "100%", opacity: "1" },
			}}
		>
			{/*diagonal line*/}
			<div style={{ height: "0px" }}>
				<div style={styles.stripe} />
			</div>

			{/* //loading page and loading icon */}
			<div
				className="transition-5"
				style={{
					...styles.loadingDiv,
					...{
						zIndex: loading ? "10" : "-1",
						opacity: loading ? "0.33" : "0",
					},
				}}
			>
				<LoadingOutlined
					className="transition-5"
					style={{
						...styles.loadingIcon,
						...{
							zIndex: loading ? "10" : "-1",
							opacity: loading ? "1" : "0",
							fontSize: "82px",
							top: "calc(50% - 41px)",
							left: "calc(50% - 41px)",
						},
					}}
				/>
			</div>

			{/* Web Form */}
			<div
				style={{
					position: "absolute",
					height: "100%",
					width: "100%",
					textAlign: "center",
				}}
			>
				{/* Our profile pic at top center */}
				<Avatar
					style={{
						position: "relative",
						left: "calc(50% - 44px)",
						top: "10%",
					}}
				/>

				<div style={styles.topText}>
					Welcome to the <br /> Support Chat
				</div>

				<form
					onSubmit={(e) => handleSubmit(e)}
					style={{ position: "relative", width: "100%", top: "19.75%" }}
				>
					<input
						style={styles.emailInput}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Your Email"
					/>
				</form>

            <div style={styles.bottomText}>
               Enter your email <br/> to get started
            </div>
			</div>
		</div>
	);
}

export default EmailForm;
