import { describe, it, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

test("demo", () => {
	expect(true).toBe(true);
});

describe("render", () => {
	it("renders the main page", () => {
		render(<Homepage />);
		expect(true).toBeTruthy();
	});
});
