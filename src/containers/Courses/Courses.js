import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import Course from "../Course/Course";
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        
    }
    clickHandler = (id,title)=>{
        this.props.history.push("/courses/"+id+"/"+title)
        this.setState({show:false})
    }
    componentDidMount(){
        this.setState({show:true})
    }
    render () {
        let courses=null;
        // if (this.state.show){
            courses=(
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map( course => {
                                return (
                                    <Link 
                                        key={course.id} 
                                        to={{
                                            pathname:this.props.match.url+'/'+course.id,
                                            search: "?title=" + course.title
                                            }}>
                                    {/* <article onClick={()=>this.clickHandler(course.id, course.title)}className="Course" > */}
                                    <article className="Course" >
                                    {course.title}</article>
                                    </Link>
                               
                                )} )
                        }
                    </section>
                </div>
            )
        // }
        return (
            <div>
                {courses}
                <Route path={this.props.match.url+"/:courseId"}  component={Course} />
                {/* <Route path={this.props.match.url+"/:id"+"/:title"} exact component={Course} /> */}
            
            </div>
        );
    }
}

export default Courses;