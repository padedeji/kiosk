import Ember from 'ember';

export function categoryColor(params/*, hash*/) {

  var colors = {
    "All": "#001F3F",
    "Services": "#0074D9",
    "Health & Care": "#7FDBFF",
    "Education": "#39CCCC",
    "Food": "#3D9970",
    
    "All Categories": "#001F3F",
    "Be Well::Children & Youth": "#0074D9",
    "Be Well::Adults": "#7FDBFF",
    "Feel Well::Adults": "#39CCCC",
    "Feel Well::Children & Youth": "#3D9970",
    "Feel Well::Seniors": "#2ECC40",
    "Be Well::Seniors": "#01FF70",
    "Eat Well::Children & Youth": "#FFDC00",
    "Eat Well::Adults": "#FF851B",
    "Eat Well::Seniors": "#FF4136",
    "Move Well::Adults": "#F012BE",
    "Be Safe::Home Services": "#B10DC9",
    "Move Well::Children & Youth": "#85144B",
    "Move Well::Seniors": "#FFFFFF",
    "Events": "#DDDDDD",
    "Be Safe::Domestic Violence": "#AAAAAA",
    "Uncategorized": "#111111"
  };

  var list = params[0].tags;
  return colors[list[list.length - 1]];
}

export default Ember.Helper.helper(categoryColor);
