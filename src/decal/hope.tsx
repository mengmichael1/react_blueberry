/// <reference path='../../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect(
  (state) => ({}),
  (dispatch) => ({})
)

export class Hope extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    
    getAboutText() {
        return (
            <div class="content">
                <div class="left">
                    <span class="heading blue">
                        Hands On Practical Electronics
                    </span>
                    <br />
                    <br />
                    <p>
                        Over the last several years, the UC Berkeley IEEE Student Branch has been developing and facilitating its Hands On Practical Electronics classes for both university and high school audiences. Based on the principle that building a circuit on a breadboard is an intuitive and exciting way to introduce electrical engineering, each lesson features fundamental theory combined with a simple but practical application. After a brief lecture, students are equipped with a soldering iron, multimeter, board, and various electronic components from which they construct a device which clearly demonstrates the lesson's core concept. Thus after each lesson, the student leaves not only with new knowledge but also an application of that knowledge. Be it a night light, solar cell battery charger, thermometer, or digital lock, the class projects show that electrical engineering is not just abstract equations accessible only to a select few, but rather the power to control and design exciting real world applications accessible to all.
                    </p>
                    <br />
                    <p>
                        We say “accessible to all” with confidence because our lessons assume no background in the sciences and do not require any advanced math. The class is geared towards students outside the College of Engineering, and each semester we attract a diverse group of students with different backgrounds. The DeCal provides an opportunity for students to gain exposure to the field of electrical engineering without the commitment of a four-unit technical course. This also makes the course popular for students considering engineering, as it serves as a brief introduction to the material seen in EE 40/42/43/100.
                    </p>
                    <br />
                    <p>
                        We are also extending our efforts to local high schools. High school students are rarely exposed to any electrical engineering in their standard coursework, and what mere exposure they may get often comes from physics courses. However, these courses tend to stay in the realm of theory and do not emphasize the many applications of electrical engineering in every day life. As a consequence, many students are ill-informed about the field and are cautious about considering electrical engineering as a college major. Our goal is to help cultivate interest in the field and show high school students the many academic and professional opportunities in one of the biggest and most exciting industries.
                    </p>
                </div>
                <div class="right">
                    <img alt="1" class="hope-pic" src="/assets/hope/1-6bd7f4d3f5fd42eb7fa36ed015cf7e74.png" />
                    <img alt="2" class="hope-pic" src="/assets/hope/2-e8b61814a4ed5ae43f8130bb152ad373.png" />
                    <img alt="3" class="hope-pic" src="/assets/hope/3-c554c623945ff95e2f65372022fba80c.png" />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Hope</h1>
                <Link to="/decal/hope">About</Link> <br />
                <Link to="/decal/hope/faq">FAQ</Link> <br />
                <Link to="/decal/hope/resources">Resources</Link> <br />
                <Link to="/decal/hope/archive">Archive</Link>
                {this.props.children ? this.props.children : this.getAboutText()}
            </div>
        );
    }
}



export class HopeFaq extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="content">
                <span class="heading blue">
                FAQ
                </span>
                <br />
                <br />
                <span class="subheading grey">
                What is the subject matter of the course?
                </span>
                <br />
                <br />
                <p>
                The class will go through the standard coursework of a first-semester-in-electronics course. We will start with the physics of charge, voltage, current, resistance, and capacitance. We will then abstract these concepts into circuit components and consider basic circuit analysis methods. After a solid foundation in passive circuits has been established, we will introduce active devices such as operational amplifiers, timers, and logic gates. Basic semiconductor physics will also be covered, including MOS transistors, diodes, and solar cells. Modern integrated circuit fabrication may be covered, if time permits.
                </p>
                <br />
                <span class="subheading grey">
                What are the key learning outcomes?
                </span>
                <br />
                <br />
                <p>
                Our goal is to provide a fun and interesting introduction to Electrical Engineering. Upon completion of HOPE, students will have obtained the knowledge required to understand the role electronics play in their day-to-day lives. They will also have learned practical skills that can be applied in personal projects. Past examples include blinking bicycle safety lights, battery powered iPhone chargers, battery powered guitar amplifiers, and more.
                </p>
                <br />
                <span class="subheading grey">
                How will student performance be evaluated?
                </span>
                <br />
                <br />
                <p>
                Regular attendance is required. Without practical, in-lab experience, the theory will be less meaningful. Students will also be evaluated upon participation. In order for students to learn from the lab component of the class, they must actually construct the circuits. As long as students simply attend, participate, and put effort into the class, they will receive a passing mark. The course curriculum and lesson and lab plans are carefully reviewed by professors in the Electrical Engineering department.
                </p>
                <br />
                <span class="subheading grey">
                How can I contact the instructors?
                </span>
                <br />
                <br />
                <p>
                Email the instructors at <span class="email">ieee-hope@lists.berkeley.edu</span>
                </p>
            </div>
        );
    }
}


export class HopeResources extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="content">
                <div class="left">
                    <table id="hope-resources">
                        <tbody>
                            <tr>
                                <th class="hope-header">Title</th>
                                <th class="hope-header">Lectures</th>
                                <th class="hope-header">Labs</th>
                            </tr>
                            <tr>
                                <td class="hope-link">Course Introduction</td>
                                <td class="hope-link"><a href="/course/materials/lectures/00.pdf" class="hope-resource">Lecture 0</a></td>
                                <td class="hope-link"></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Safety, Soldering, Terminology</td>
                                <td class="hope-link"><a href="/course/materials/lectures/01.pdf" class="hope-resource">Lecture 1</a></td>
                                <td class="hope-link"></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Voltage, Current, Resistance</td>
                                <td class="hope-link"><a href="/course/materials/lectures/02.pdf" class="hope-resource">Lecture 2</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/02.pdf" class="hope-resource">Lab 2</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Ohm's Law, Equivalent Resistance</td>
                                <td class="hope-link"><a href="/course/materials/lectures/03.pdf" class="hope-resource">Lecture 3</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/03.pdf" class="hope-resource">Lab 3</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Capacitance</td>
                                <td class="hope-link"><a href="/course/materials/lectures/04.pdf" class="hope-resource">Lecture 4</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/04.pdf" class="hope-resource">Lab 4</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Amplifiers</td>
                                <td class="hope-link"><a href="/course/materials/lectures/05.pdf" class="hope-resource">Lecture 5</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/05.pdf" class="hope-resource">Lab 5</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Oscillators</td>
                                <td class="hope-link"><a href="/course/materials/lectures/06.pdf" class="hope-resource">Lecture 6</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/06.pdf" class="hope-resource">Lab 6</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Silicon</td>
                                <td class="hope-link"><a href="/course/materials/lectures/07.pdf" class="hope-resource">Lecture 7</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/07.pdf" class="hope-resource">Lab 7</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Transistors</td>
                                <td class="hope-link"><a href="/course/materials/lectures/08.pdf" class="hope-resource">Lecture 8</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/08.pdf" class="hope-resource">Lab 8</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Digital Logic</td>
                                <td class="hope-link"><a href="/course/materials/lectures/09.pdf" class="hope-resource">Lecture 9</a></td>
                                <td class="hope-link"><a href="/course/materials/labs/09.pdf" class="hope-resource">Lab 9</a></td>
                            </tr>
                            <tr>
                                <td class="hope-link">Final Projects!</td>
                                <td class="hope-link"></td>
                                <td class="hope-link"></td>
                            </tr>
                        <tr></tr>
                        </tbody>
                    </table>
                </div>
                <div class="right">
                    <span class="heading blue">Resources</span>
                    <br />
                    <br />
                    <p>
                        All the resources used to conduct the H.O.P.E course are available here. A syllabus outlining the course structure can also be found here.
                    </p>
                    <br />
                    <p>
                        Please e-mail the H.O.P.E. committee if you intend to use these resources outside of personal use.
                    </p>
                    <br />
                    <a href="/course/materials/syllabus.pdf" class="blue">Course Syllabus</a>
                </div>
            </div>
        );
    }
}

export class HopeArchive extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="content">
                <div class="left">
                    <table id="hope-resources">
                    <tbody><tr>
                        <th class="hope-header">Title</th>
                        <th class="hope-header">Lessons</th>
                        <th class="hope-header">Handouts</th>
                        <th class="hope-header">Labs</th>
                    </tr>
                    <tr>
                        <td class="hope-link">Course Introduction</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/01.ppt" class="hope-resource">Lesson 1</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/01.pdf" class="hope-resource">Handout 1</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/01.pdf" class="hope-resource">Lab 1</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">Voltage, Current, Resistance</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/02.ppt" class="hope-resource">Lesson 2</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/02.pdf" class="hope-resource">Handout 2</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/02.pdf" class="hope-resource">Lab 2</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">Ohm's Law</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/03.ppt" class="hope-resource">Lesson 3</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/03.pdf" class="hope-resource">Handout 3</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/03.pdf" class="hope-resource">Lab 3</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">Capacitance</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/04.ppt" class="hope-resource">Lesson 4</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/04.pdf" class="hope-resource">Handout 4</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/04.pdf" class="hope-resource">Lab 4</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">Silicon, Breadboards</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/05.ppt" class="hope-resource">Lesson 5</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/05.pdf" class="hope-resource">Handout 5</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/05.pdf" class="hope-resource">Lab 5</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">PN Junctions, Diodes, Solar Cells</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/06.ppt" class="hope-resource">Lesson 6</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/06.pdf" class="hope-resource">Handout 6</a></td>
                        <td class="hope-link"></td>
                    </tr>
                    <tr>
                        <td class="hope-link">MOSFETs</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/07.ppt" class="hope-resource">Lesson 7</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/07.pdf" class="hope-resource">Handout 7</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/07.pdf" class="hope-resource">Lab 7</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">MOSFETs</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/08.ppt" class="hope-resource">Lesson 8</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/08.pdf" class="hope-resource">Handout 8</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/08.pdf" class="hope-resource">Lab 8</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">CMOS, Digital Logic</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/09.ppt" class="hope-resource">Lesson 9</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/09.pdf" class="hope-resource">Handout 9</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/09.pdf" class="hope-resource">Lab 9</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">Fabrication</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/10.ppt" class="hope-resource">Lesson 10</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/handouts/10.pdf" class="hope-resource">Handout 10</a></td>
                        <td class="hope-link"><a href="/course/archive/materials/labs/10.pdf" class="hope-resource">Lab 10</a></td>
                    </tr>
                    <tr>
                        <td class="hope-link">Inductors</td>
                        <td class="hope-link"><a href="/course/archive/materials/lessons/11.ppt" class="hope-resource">Lesson 11</a></td>
                        <td class="hope-link"></td>
                        <td class="hope-link"></td>
                    </tr>
                    </tbody></table>
                </div>
                <div class="right">
                    <span class="heading blue">Archive</span>
                    <br />
                    <br />
                    <p>
                    Prior resources used to conduct the H.O.P.E course are available here. A former syllabus outlining the course structure can also be found here.
                    </p>
                    <br />
                    <p>
                    Please e-mail the H.O.P.E. committee if you intend to use these resources outside of personal use.
                    </p>
                    <br />
                    <a href="/course/archive/materials/syllabus.pdf" class="blue">Course Syllabus</a>
                </div>
            
            </div>
        );
    }
}

