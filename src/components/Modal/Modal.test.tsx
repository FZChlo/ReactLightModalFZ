import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Modal from "./Modal";

describe("When i set isOpen to true", () => {
	test("Then the Modal component should be displayed", () => {
		render(
			<Modal
				title="Hello world !"
				canClose
				isOpen={true}
				toggleModal={() => {}}
				closeBtnContent={<p>X</p>}
				haveFooter={false}
				footerContent={<></>}
				modalContent={
					<>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore a impedit et
						expedita vero esse repellat, quasi reiciendis tempora?
					</>
				}
			/>
		);
	});
});