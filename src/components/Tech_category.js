import React from "react";
import Category_btn from "./Category_btn";

const Tech_category = () => {
	return (
		<>
			<Category_btn />
			<section id="my-tech-stack">
				<h3>My Tech Stack</h3>
				<div aria-label="software">
					<button>Code</button>
					<ul>
						<li>
							Languages
							<ul>
								<li>Javascript</li>
								<li>CSS/SASS</li>
								<li>html</li>
							</ul>
						</li>
						<li>
							Libraries
							<ul>
								<li>React</li>
								<li>Mui</li>
								<li>Font awesome</li>
								<li>Firebase</li>
							</ul>
						</li>
						<li>
							Utilities
							<ul>
								<li>?</li>
								<li>?</li>
							</ul>
						</li>
					</ul>
					<button>Software</button>
					<p>pop-out grid or UL of software</p>
					<ul>
						<li>
							Design
							<ul>
								<li>Figma</li>
								<li>Pexels</li>
								<li>Draw.io</li>
								<li>Coolors.co</li>
								<li>Canva</li>
								<li>Creative Market</li>
							</ul>
						</li>
						<li>
							Website and Podcast Management, and Deployment
							<ul>
								<li>Render</li>
								<li>One</li>
								<li>Webflow</li>
								<li>BrowserStack</li>
								<li>Podbean</li>
							</ul>
						</li>
						<li>
							Organisation and planning
							<ul>
								<li>Notion</li>
								<li>Trello</li>
								<li>Miro</li>
							</ul>
						</li>
						<li>
							IDE & Version Control
							<ul>
								<li>Visual Studio Code</li>
								<li>GitHub</li>
							</ul>
						</li>
						<li>
							Audio & Video Editing
							<ul>
								<li>Dorico</li>
								<li>Sibelius</li>
								<li>Audacity</li>
								<li>Ableton</li>
								<li>ProTools</li>
								<li>Da Vinci Resolve</li>
							</ul>
						</li>
						<li>
							Communications and PR
							<ul>
								<li>MailChimp</li>
								<li>EM</li>
								<li>one.com</li>
							</ul>
						</li>
					</ul>
				</div>
				<div aria-label="hardware">
					<button>Hardware</button>
					<p>pop-out grid or UL of gear, with tags</p>
					<ul>
						<li>MacbookPro 2021</li>
						<li>Custom-built PC</li>
						<li>AKG Lyra Microphone</li>
						<li>Quad ESL 63 Electrostatic Speakers</li>
						<li>Arcam SA20 + CDS50</li>
						<li>Rotel RP830 Turntable</li>
						<li>OnePLus Nord2 5G</li>
						<li>Logi MX Keys</li>
						<li>Logitech G502 SE - Hero Mouse</li>
						<li>BT One SAHD1 Wireless Headphones</li>
						<li>
							Crappy old Lenovo Ideacentre frankinsteined into a monitor for
							PC/second monitor for Macbook
						</li>
					</ul>
				</div>
				<div aria-label="learning">
					<button>Learning</button>
					<p>list of learning resources I really appreciate</p>
					<ul>
						<li>freecodecamp</li>
						<li>Coursera</li>
						<li>udemy</li>
						<li>Colt Steele</li>
						<li>W3 Schools</li>
						<li>MDN</li>
						<li>MusiCoders</li>
						<li>Command Shift</li>
						<li>Eloquent Javascript</li>
						<li>The Pragmatic Programmer</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Tech_category;
