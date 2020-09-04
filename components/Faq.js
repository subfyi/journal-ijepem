import React from 'react';
import Link from "next/link";
import moment from "moment";

const Faq = (props) => {
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">

                    {props.volumes && <>
                        <div className="text-center align-items-center ">
                            <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-00.pdf"}><a target="_blank">
                                <img src={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-00.png"} alt="ijepem" width="25%"/>
                            </a></Link>
                        </div>
                        <div className="col-lg-12">
                            <br/>
                        </div>
                        <div className="col-lg-12 text-center align-items-center mb-5 ">
                            <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-00.pdf"}><a target="_blank"
                                                                                                                                                 className="btn btn-outline-dark text-secondary mx-4 ">
                                COVER
                            </a></Link>
                            <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-00-00-01" + (props.volumes.data[0].special && 1 ? "-s": "") + ".pdf"}><a target="_blank"
                                                                                                                               className="btn btn-outline-dark text-secondary mx-4 ">
                                EDITORS
                            </a></Link>
                            <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-00-00-02.pdf"}><a target="_blank"
                                                                                                                               className="btn btn-outline-dark text-secondary mx-4 ">
                                ABOUT
                            </a></Link>
                            <Link href={"/doc/ijepem-" + moment(props.volumes.data[0].year).format("YY") + "-0" + props.issue + "-00-03.pdf"}><a target="_blank"
                                                                                                                                                 className="btn btn-outline-dark text-secondary mx-4 ">
                                CONTENTS
                            </a></Link>
                        </div>
                    </>}

                    {props.articles.data.map((row, i) => <>
                        <div className="col-lg-12" key={row.id}>
                            <div className="faq-one__single">
                                <Link href={"/volume/" + row.volume + "/issue/" + row.issue + "/article/" + row.order_num}><a>
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
                                <Link href={"/volume/" + row.volume + "/issue/" + row.issue + "/article/" + row.order_num}>
                                    <a className="btn btn-outline-dark text-secondary mx-4 ">
                                        Sayfa: {row.first_page}-{row.last_page}
                                    </a></Link>
                            </div>
                        </div>
                    </>)}


                </div>
            </div>
        </section>

    );
};

export default Faq;
