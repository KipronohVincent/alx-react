import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

export default function CourseList({listCourses}) {
    return (
        <div>
            <div class="table">
                <table id="CourseList">
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
                    </thead>
                    <tbody>
                        {(listCourses.length > 0) ?
                         (listCourses.map(({id, name, credit}) =>(
                            <CourseListRow key={id} textFirstCell={name} textSecondCell={credit}/>
                         ))) : 
                         (
                            <tr>
                                <td colSpan="2">
                                    No course available yet
                                </td>
                            </tr>
                         )
                         }
                    </tbody>
                </table>
            </div>
            <div className="linea"></div>
        </div>
    );
}

CourseList.PropTypes = {
    listCourses: PropTypes.arrayOf(
        CourseShape
    ),
};

CourseList.defaultProps = {
    listCourses: []
};
