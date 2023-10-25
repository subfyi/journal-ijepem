import { PageHeader } from '@/layout/Breadcrumb'
import NavOne from "@/components/NavOne";
import React from "react";

const metaTitle = 'Guide for Authors'
export const metadata = {
  title: metaTitle + ' | IJEPEM',
  openGraph: {
    title: metaTitle + ' | IJEPEM'
  }
}
export default function Page() {
  return <>
      <PageHeader title="Guide for Authors" />
      <section className="team-details">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12">
              <div className="team-details__content">
                <p>
                  All manuscripts should be written accourding to template document given below.


                </p>
                <p><a href="https://ijepem.com/doc/IJEPEM-Template-for-Autors.docx"> Template for Autors ( https://ijepem.com/doc/IJEPEM-Template-for-Autors.docx )

                </a>
                </p>

                <p>
                  Copyright Form File Must Be Signed By All Authors And Uploaded To The System.

                </p>
                <p><a href="https://ijepem.com/doc/ijepem-copyright.pdf"> Copyright Form File ( https://ijepem.com/doc/ijepem-copyright.pdf )</a></p>


              </div>
            </div>

          </div>
        </div>
      </section>
  </>
}
