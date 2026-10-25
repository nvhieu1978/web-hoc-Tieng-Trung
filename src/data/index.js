import lessonsData from './lessons.json';
import resourcesData from './resources.json';

export const lessons = lessonsData;
export const resources = resourcesData;

export function getLessonById(id) {
  return lessons.find(l => l.id === id);
}

export function getLatestLesson() {
  return lessons[lessons.length - 1];
}

export function getAllTags() {
  const set = new Set();
  lessons.forEach(l => {
    l.tags?.forEach(tag => set.add(tag));
  });
  return Array.from(set);
}

export function getAllCategories() {
  const set = new Set();
  lessons.forEach(l => {
    if (l.category) set.add(l.category);
  });
  return Array.from(set);
}
