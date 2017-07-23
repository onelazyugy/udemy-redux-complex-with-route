import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST}   from '../actions';


export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST: 
            return _.omit(state, action.payload);//return a new object that does not have the deleted post id 
        case FETCH_POST: 
            //ES5 syntax
            /*
            const post = action.payload.data;
            const newState = { ...state }; //take current posts and return new post object
            newState[post.id] = post;
            return newState;
            */

            //ES6 syntax
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}