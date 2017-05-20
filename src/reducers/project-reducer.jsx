
const projects = {
  'id-1': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min1.jpg'
    }
  },
  'id-2': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min2.jpg'
    }
  },
  'id-3': {
    tag: 'Mark Sebastian',
    image: {
      src: './sample/portfolio-min3.jpg'
    }
  },
  'id-4': {
    tag: 'Mark Sebastian',
    image: {
      src: './sample/portfolio-min4.jpg'
    }
  },
  'id-5': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min5.jpg'
    }
  },
  'id-6': {
    tag: 'Mark Sebastian',
    image: {
      src: './sample/portfolio-min6.jpg'
    }
  },
  'id-7': {
    tag: 'Mark Sebastian',
    image: {
      src: './sample/portfolio-min7.jpg'
    }
  },
  'id-8': {
    tag: 'Mark Sebastian',
    image: {
      src: './sample/portfolio-min8.jpg'
    }
  },
  'id-9': {
    tag: 'Mark Sebastian',
    image: {
      src: './sample/portfolio-min9.jpg'
    }
  },
  'id-10': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min10.jpg'
    }
  },
  'id-11': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min11.jpg'
    }
  },
  'id-12': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min12.jpg'
    }
  },
  'id-13': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min13.jpg'
    }
  },
  'id-14': {
    tag: 'Other cars',
    image: {
      src: './sample/portfolio-min14.jpg'
    }
  },
  'id-15': {
    tag: 'Other cars',
    image: {
      src: './sample/portfolio-min15.jpg'
    }
  },
  'id-16': {
    tag: 'Other cars',
    image: {
      src: './sample/portfolio-min16.jpg'
    }
  },
  'id-17': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min17.jpg'
    }
  },
  'id-18': {
    tag: 'Other cars',
    image: {
      src: './sample/portfolio-min18.jpg'
    }
  },
  'id-19': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min19.jpg'
    }
  },
  'id-20': {
    tag: 'Other cars',
    image: {
      src: './sample/portfolio-min20.jpg'
    }
  },
  'id-21': {
    tag: 'Other cars',
    image: {
      src: './sample/portfolio-min1.jpg'
    }
  },
  'id-22': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min2.jpg'
    }
  },
  'id-23': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min3.jpg'
    }
  },
  'id-24': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min4.jpg'
    }
  },
  'id-25': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min5.jpg'
    }
  },
  'id-26': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min6.jpg'
    }
  },
  'id-27': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min7.jpg'
    }
  },
  'id-28': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min8.jpg'
    }
  },
  'id-29': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min9.jpg'
    }
  },
  'id-30': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min10.jpg'
    }
  },
  'id-31': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min11.jpg'
    }
  },
  'id-32': {
    tag: 'Monty Python',
    image: {
      src: './sample/portfolio-min12.jpg'
    }
  },
  'id-33': {
    tag: 'Monty Python',
    image: {
      src: './sample/portfolio-min13.jpg'
    }
  },
  'id-34': {
    tag: 'Monty Python',
    image: {
      src: './sample/portfolio-min14.jpg'
    }
  },
  'id-35': {
    tag: 'Monty Python',
    image: {
      src: './sample/portfolio-min15.jpg'
    }
  },
  'id-36': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min16.jpg'
    }
  },
  'id-37': {
    tag: 'Monty Python',
    image: {
      src: './sample/portfolio-min17.jpg'
    }
  },
  'id-38': {
    tag: 'Monty Python',
    image: {
      src: './sample/portfolio-min18.jpg'
    }
  },
  'id-39': {
    tag: 'Monty Python',
    image: {
      src: './sample/portfolio-min19.jpg'
    }
  },
  'id-40': {
    tag: 'Ford Mustang',
    image: {
      src: './sample/portfolio-min20.jpg'
    }
  }
};

const photos = [
  {
    src: './sample/portfolio-min1.jpg',
    srcbig: './sample/portfolio-big1.jpg',
    title: "Enlarge image"
  },
  {
    src: './sample/portfolio-min2.jpg',
    srcbig: './sample/portfolio-big2.jpg',
    title: "Enlarge image"
  },
  {
    src: './sample/portfolio-min3.jpg',
    srcbig: './sample/portfolio-big3.jpg',
    title: "Enlarge image"
  },
  {
    src: './sample/portfolio-min4.jpg',
    srcbig: './sample/portfolio-big4.jpg',
    title: "Enlarge image"
  },
  {
    src: './sample/portfolio-min5.jpg',
    srcbig: './sample/portfolio-big5.jpg',
    title: "Enlarge image"
  }
];

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

      return newState;

    case 'HIDE_LIGHTBOX':
      newState.lightbox.showState = false;

      return newState;
  }

  return state;
}

export default projectReducer;