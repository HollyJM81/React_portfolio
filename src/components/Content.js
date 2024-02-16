import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Tech_stack from "./Tech_stack";
import Page from "./Page";

const Content = () => {
	const [open, setOpen] = useState("About");
	const [layer, setLayer] = useState("1");
	const [labelDir, setLabelDir] = useState("vertical");

	const handleSelect = (label) => {
		setOpen(label);
		setLabelDir("horizontal");
		setLayer("0");
		if (!open) {
			setLabelDir("vertical");
			setLayer("1");
		}
		//return the other pages to z-index 1 and 2 (layer, setLayer);
		// By default, About is set to z-index 0; Projecst to z-index 1 and tech_stack to z-index 2
		// On z-index change, the label position and rotation needs to change (labelDir, setLabelDir), and shading rules apply if needed (maybe these are always active)
	};
	return (
		<>
			<Page>
				<About label="About" open={open} layer={layer} labelDir={labelDir} />
			</Page>
			<Page>
				<Projects
					label="Projects"
					open={open}
					layer={layer}
					labelDir={labelDir}
				/>
			</Page>
			<Page>
				<Tech_stack
					label="Tech Stack"
					open={open}
					layer={layer}
					labelDir={labelDir}
				/>
			</Page>
		</>
	);
};

export default Content;
