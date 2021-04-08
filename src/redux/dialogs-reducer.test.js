import profileReducer, {addPostActionCreator} from "./profile-reducer";
import {addMessageActionCreator} from "./dialogs-reducer";


let state = {
    messages: [
        {id: 0, text: 'Lorem ipsum dolor sit amet.'},
        {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 2, text: 'Lorem ipsum dolor.'}
    ]
};





test('Count message increment', () => {
    // 1. test data
    let action = addMessageActionCreator("Test");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.messages.length).toBe( 3);
});
