const projects = require('../db/projects.json');
const photos   = require('../db/projectPhotos.json');

let initialState = {
  photos: [],
  lightbox: {
    showState: false,
    currentSlide: 0
  }
};

const projectReducer = function(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch(action.type) {
    case 'GET_PROJECT_BY_ID':
      newState.tag = projects[action.id].tag;
      newState.id = action.id;
      newState.photos = photos;

      return newState;

    case 'SHOW_LIGHTBOX':
      newState.lightbox.showState = true;
      newState.lightbox.currentSlide = action.currentSlide;

      return newState;

    case 'HIDE_LIGHTBOX':
      newState.lightbox.showState = false;

      return newState;

    case 'NEXT_LIGHTBOX':
      if(newState.lightbox.currentSlide === (newState.photos.length - 1)) {
        newState.lightbox.currentSlide = 0;
      } else {
        newState.lightbox.currentSlide++;
      }

      return newState;

    case 'PREV_LIGHTBOX':
      if(newState.lightbox.currentSlide === 0) {
        newState.lightbox.currentSlide = newState.photos.length - 1;
      } else {
        newState.lightbox.currentSlide--;
      }

      return newState;
  }

  return state;
}

export default projectReducer;