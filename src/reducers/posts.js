const posts = (state = [{
    id: 0,
    img_url: 'test.net', 
    title: 'My Post', 
    author: 'The Jan', 
    content: 'Digijan does it again', 
    createdAt: new Date(), 
    votes: 2
}], action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default posts