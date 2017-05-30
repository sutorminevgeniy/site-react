
const portfolio = require('../db/portfolio.json');

let portfolioByTag = portfolio;

let initialState = {
  page: 1,
  countProjects: 10,
  tag: 'All',
  portfolio: portfolioByTag
};

initialState.portfolio = portfolioByTag.slice(0, initialState.countProjects);

const getTags = function () {
  let result = {};

  result.All = portfolio.length;

  portfolio.map((item) => {
    if(item.tag in result) {
      result[item.tag]++;
    } else {
      result[item.tag] = 1;
    }
  });

  return result;
}

initialState.tags = getTags();

const portfolioReducer = function(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch(action.type) {
    case 'GET_PROJECTS_BY_TAG':
      if(action.tag === 'All'){
        portfolioByTag = portfolio;
      } else {
        portfolioByTag = portfolio.filter(function(item) {
          return (item.tag === action.tag);
        });
      }

      newState.page = 1;
      newState.tag =action.tag;
      newState.portfolio = portfolioByTag.slice(0, newState.countProjects);

      return newState;

    case 'NEXT_PAGE':
      let startProject;

      newState.page = state.page;

      if(newState.page < Math.ceil(portfolioByTag.length / newState.countProjects)){
        newState.page++;
      } else {
        newState.page = 1;
      }

      startProject = (newState.page - 1) * newState.countProjects
      newState.portfolio = portfolioByTag.slice(startProject , startProject + newState.countProjects);

      return newState;

    case 'PREV_PAGE':
      newState.page = state.page;

      if(newState.page > 1){
        newState.page--;
      } else {
        newState.page = Math.ceil(portfolioByTag.length / newState.countProjects);
      }
      
      startProject = (newState.page - 1) * newState.countProjects
      newState.portfolio = portfolioByTag.slice(startProject , startProject + newState.countProjects);

      return newState;
  }

  return state;
}

export default portfolioReducer;