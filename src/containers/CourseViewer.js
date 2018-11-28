import React from 'react'
import CourseInfoCard from '../components/CourseInfoCard'

//  Implement with firebase when ready
let fetchCourses = (callback) => {
  fetch('temp_courses.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      callback(myJson);
    });
}

class CourseViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }

    this.updateCourseList = this.updateCourseList.bind(this)
  }

  componentDidMount() {
    fetchCourses(this.updateCourseList)
  }

  updateCourseList(courses) {
    this.setState({
      courses: courses
    })
  }

  render() {
    let CourseListing = (
      this.state.courses.length > 0 ?
        this.state.courses.map((e) => {
          return (
            <CourseInfoCard
              course_name={e.course_name}
              course_description={e.course_description}
              instructor={e.instructor}/>
          )
        }) : <h5>Loading...</h5>
    )


    return (
      <div className="container">
        <br />
        <h2>Courses</h2>
        <div className="row">
        {
          CourseListing

        }
        </div>
        <div className="row justify-content-center">



        </div>
      </div>
    )
  }
}

export default CourseViewer
