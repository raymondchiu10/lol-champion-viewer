import { describe, it, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Example from "./Example";

test("demo", () => {
	expect(true).toBe(true);
});

describe("render", () => {
	it("renders the main page", () => {
		render(<Example />);
		expect(true).toBeTruthy();
	});
});
