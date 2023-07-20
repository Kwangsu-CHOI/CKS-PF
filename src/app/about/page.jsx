import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt=""
					className={styles.img}
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Story Telling about yourself</h1>
					<h2 className={styles.imgDesc}>
						show me what you have done in digital space
					</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who am I?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
						mauris sit amet risus tempor dapibus. Etiam ac nulla ut felis
						sodales tempus. Phasellus tristique, sapien sed ornare eleifend,
						quam nunc faucibus urna, at gravida sem ligula eget enim.
						<br />
						<br />
						Nunc et imperdiet dolor. Morbi ac tristique enim. In erat ligula,
						consequat a diam sed, consectetur volutpat lorem. Nulla id
						ullamcorper lacus, at viverra purus. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Duis commodo lorem sit amet consequat
						dictum. Etiam at dapibus metus. Praesent eget maximus velit.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>What have done?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
						mauris sit amet risus tempor dapibus.
						<br />
						<br /> - React projects
						<br />
						<br /> - Next.js 13 Projects
					</p>
					<Button url="contact" text="Contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
