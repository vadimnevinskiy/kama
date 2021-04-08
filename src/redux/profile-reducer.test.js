import profileReducer, {addPostActionCreator, deletePostActionCreator, setStatus} from "./profile-reducer";


let state = {
    posts: [
        {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
        {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
        {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
        {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
    ],
    status: ''
};

test('Count message increment', () => {
    // 1. test data
    let action = addPostActionCreator("Test");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe( 5);
});

test('Added message', () => {
    // 1. test data
    let action = addPostActionCreator("Test");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].text).toBe( "Test");
});

test('Count message decrement', () => {
    // 1. test data
    let action = deletePostActionCreator(0);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe( 3);
});
test(`After deleting length should'nt decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePostActionCreator(5);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe( 4);
});


test(`Set status`, () => {
    // 1. test data
    let action = setStatus('Test');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.status).toBe( 'Test');
});
