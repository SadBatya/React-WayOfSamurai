let state = {
  profilePage:{
    posts: [
      { id: 1, message: 'Hi. how are you?', likesCount: 12 },
      { id: 2, message: 'It`s My first post', likesCount: 10 },
      { id: 3, message: 'BlaBla', likesCount: 15 },
      { id: 4, message: 'BlaBlaBLA', likesCount: 18 },
    ],
    
  },
  messagesPage:{
    messages: [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'How is your is-kamasutra?' },
    ],
    dialogs: [
      { id: 1, name: 'Dymich' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' },
    ],
  },
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost)
}

export default state