import React from 'react';
import Link from 'next/link';
import moment from "moment";

const Courses = (props) => {
    return (
        <section className="course-one course-page">
            <div className="container">
                <div className="row">
                    {props.volumes.data.map((row, i) => <>
                        <div className="col-lg-3" key={row.id}>
                            <Link href={"/volume-" + row.volume + "/issue-" + row.issue + "/"}><a>
                                <div className="course-one__single">
                                    <div className="course-one__image">
                                        <img src={require("../public/doc/ijepem-"+ moment(row.year).format("YY") +"-0" + row.issue + "-00-00.png?resize&size=270")}
                                             alt="volume image"/>
                                    </div>
                                    <div className="course-one__content">
                                        <a href="#" className="course-one__category">{moment(row.year).format("YYYY")}</a>
                                        <h2 className="course-one__title">{"Volume " + row.volume + " Issue " + row.issue}
                                        </h2>
                                        <div className="course-one__meta">
                                            <a href="#"><i className="far fa-folder-open"></i> {row.articles.length} Article</a>
                                        </div>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                    </>)}
                </div>
            </div>
        </section>
    );
};

export default Courses;
