// .storybook/manager.js

import { addons } from "@storybook/addons";
import customTheme from "./customTheme";

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: "bottom",
	enableShortcuts: false,
	isToolshown: false,
	theme: customTheme,
	selectedPanel: undefined,
	initialActive: "sidebar",
	sidebar: {
		showRoots: false,
		collapsedRoots: ["other"],
	},
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
	},
});
