import { SearchOptions } from '../types';
import { FormUpdate } from '../actions/form';
import { UPDATE_FIELD } from '../constants';

const initial: SearchOptions = {
  searchTerm: '',
  delay: 10,
  minReward: 0,
  sortType: 'Latest',
  qualifiedOnly: true
};

export default (
  state = initial,
  action: FormUpdate<SearchOptions>
): SearchOptions => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.form === 'searchOptions') {
        return {
          ...state,
          [action.field]: action.value
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
