import { normalize, schema } from "normalizr";

const courses = new schema.Entity("courses");

export const coursesNormalizer = (data) => {
  return normalize(data, [courses]).entities.courses;
};
