import {
  FETCH_COURSE_SUCCESS,
  UNSELECT_COURSE,
  SELECT_COURSE,
} from "../actions/courseActionTypes";

export const reducerCourse = (state = [], action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => {
        return {
          id: course.id,
          name: course.name,
          credit: course.credit,
          isSelected: false,
        };
      });
    case SELECT_COURSE:
      return state.map((course) => {
        if (action.index === course.id) {
          return { ...course, isSelected: true };
        }
        return { ...course };
      });
    case UNSELECT_COURSE:
      return state.map((course) => {
        if (action.index === course.id) {
          return { ...course, isSelected: false };
        }
        return { ...course };
      });
    default:
      break;
  }
  return state;
};
