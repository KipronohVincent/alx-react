import {
  FETCH_COURSE_SUCCESS,
  UNSELECT_COURSE,
  SELECT_COURSE,
} from "../actions/courseActionTypes";
import { coursesNormalizer } from '../schema/courses';
import immutable from 'immutable';

const { Map } = immutable;

export const reducerCourse = (state = Map([]), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const data = coursesNormalizer(action.data);
      Object.keys(data).map((key) => {
        data[key].isSelected = false
      })
      return state.merge(data)
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true)
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false)
    default:
      break;
  }
  return state;
};
