import React from 'react';
import Link from "next/link";
import moment from "moment";

const Faq = (props) => {
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">

                    <div className="col-lg-8 pr-3">
                        <div className="row">
                            {props.articles.data.map((row, i) => <>
                                <div className="col-lg-12" key={row.id}>
                                    <div className="faq-one__single">
                                        <Link href={"/volume/" + row.volume + "/issue/" + row.issue + "/article/" + row.order_num + "/"}><a>
                                            <div className="faq-one__content">
                                                <h2 className="faq-one__title">{row.en_title}</h2>
                                                <p className="faq-one__text">
                                                    {row.authors.map((authorin, index) =>
                                                        <>{authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name},{" "}</>
                                                    )}
                                                </p>
                                            </div>
                                        </a></Link>
                                    </div>
                                    <div className="faq-one__icon">
                                        <Link href={"/volume/" + row.volume + "/issue/" + row.issue + "/article/" + row.order_num + "/"}>
                                            <a className="btn btn-outline-dark text-secondary">
                                                Pages: {row.first_page}-{row.last_page}
                                            </a></Link>
                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>


                    <div className="col-lg-4">
                        {props.volumes && <>
                            <div className="course-details__price">

                                <div className=" text-center align-items-center">

                                    <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-00.pdf"}><a target="_blank">
                                        <img className="w-100 mb-3" src={require("../public/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-00.png")}
                                             alt="volume image"/>
                                    </a></Link>

                                    <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-00.pdf"}>
                                        <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3">
                                            COVER
                                        </a></Link>

                                    <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-00-00-01" + (props.volumes.data[0].special && 1 ? "-s" : "") + ".pdf"}>
                                        <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3">
                                            EDITORS
                                        </a></Link>
                                    <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-00-00-02.pdf"}>
                                        <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3">
                                            ABOUT
                                        </a></Link>
                                    <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-03.pdf"}>
                                        <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3">
                                            CONTENTS
                                        </a></Link>

                                </div>
                            </div>
                        </>}
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Faq;
