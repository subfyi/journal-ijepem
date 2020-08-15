import React from 'react';
import Link from "next/link";

const Faq = (props) => {
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">
                    {props.articles.data.map((row, i) => <>
                        <div className="col-lg-6" key={row.id}>
                            <div className="faq-one__single">
                                <Link href={"/volume/" + row.volume + "/issue/" + row.issue + "/article/" + row.order_num}><a>
                                    <div className="faq-one__content">
                                        <h2 className="faq-one__title">{row.en_title}</h2>
                                        <p className="faq-one__text">
                                            {row.authors.map((authorin, index) =>
                                                <>  {authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name},{" "}</>
                                            )}
                                        </p>

                                        <a className="btn btn-outline-dark text-secondary mx-4 ">
                                            Page: {row.first_page}-{row.last_page}
                                        </a>
                                        {row.files.map((file, index) =>
                                            <a className="btn btn-danger obj_galley_link file" href={file.file}
                                                aria-labelledby="article-137">
                                                Full Text [PDF]
                                            </a>
                                        )}
                                    </div>
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
