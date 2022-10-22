import "./Modal.story.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
import React, { useState } from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "ReactLightModal/Modal",
	component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Modal> = (args) => {
	const [isOpen, setOpen] = useState(args.isOpen);

	const toggleModal = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<button onClick={toggleModal} className="btn-primary">
				Click me!
			</button>
			<Modal {...args} toggleModal={toggleModal} isOpen={isOpen || args.isOpen}></Modal>
		</>
	);
};

export const SimpleModal = Template.bind({});
export const SimpleModalWithFooter = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleModal.args = {
	title: "Hello world!",
	modalContent: (
		<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi nesciunt maiores quis
			recusandae unde minus placeat et quibusdam eligendi.
		</>
	),
	haveFooter: false,
	canClose: true,
};

SimpleModalWithFooter.args = {
	title: "Hello world! I've a footer",
	modalContent: (
		<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi nesciunt maiores quis
			recusandae unde minus placeat et quibusdam eligendi.
		</>
	),
	footerContent: <button className="btn-primary">Ok</button>,
	haveFooter: true,
	canClose: true
};