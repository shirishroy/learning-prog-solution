import React from 'react';

const courses = [
  { name: 'React Basics', duration: '4 weeks' },
  { name: 'Advanced JS', duration: '6 weeks' },
];

const CourseDetails = () => {
  return (
    <div>
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map((course, i) => (
          <li key={i}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
