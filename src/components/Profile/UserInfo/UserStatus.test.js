import React from "react";
import { create } from "react-test-renderer";
import UserStatus from "./UserStatus";

describe("Status component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<UserStatus status={"Test"} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Test");
    });

    test("Status block should display <span> by default", () => {
        const component = create(<UserStatus status={"Test"} />);
        const instance = component.root;
        let span = instance.findAllByType("span");
        expect(span).not.toBeNull();
    });

    test("Status block shouldn't display input by default", () => {
        const component = create(<UserStatus status={"Test"} />);
        const instance = component.root;
        expect(() => {
            let input = instance.findByType("input");
        }).toThrow();
    });


    // test("Input should be displayed in editMode", () => {
    //     const component = create(<UserStatus status={"Test"} />);
    //     const instance = component.root;
    //     let span = instance.findAllByType("span");
    //     let button = instance.classList.contains('userIcon')
    //      // let button = span.find('.userIcon');
    //     button.props.onClick();
    //     let input = instance.findByType("input");
    //
    //     expect(input.props.value).toBe("Test");
    //
    //
    // });
});
