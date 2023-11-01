
import React from "react";
import {PageHeader} from "@/layout/Breadcrumb";
import NavOne from "@/components/NavOne";

function NotFoundPage() {
    return <>
        <NavOne/>
        <PageHeader title={"404"}/>
        <div className="container">
            <div className="row center-align m-5">
                <div className="col-md-12 m-5">
                    <div className=" m-5">
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NotFoundPage