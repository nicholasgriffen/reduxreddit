import { NEW_COMMENT } from '../actions/constants'

let nextId = 1

const comments = (state = [{
    post_id: 0,
    id: 0,
    content: 'digijan rocks'
}], action) => {
    switch(action.type) {
        case NEW_COMMENT: 
            return [
                ...state, 
                {
                    post_id: action.post_id,
                    id: nextId++,
                    content: action.content
                }
            ]
        default: 
            return state
    }
}

export default comments