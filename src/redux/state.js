let rerenderEntireTree = () => {
    console.log('State is update');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, friends!', likesCount: 34},
            {id: 2, message: 'Life is good!', likesCount: 30}
        ],
        newPostText: 'Placeholder'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'I working'},
            {id: 3, message: 'Welcome to the my World'}
        ],
        dialogs: [
            {id: 1, name: 'Evgeniy'},
            {id: 2, name: 'Julia'},
            {id: 3, name: 'Aleksandra'},
            {id: 4, name: 'Michail'}
        ]
    }
}
window.state = state;

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 44
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;