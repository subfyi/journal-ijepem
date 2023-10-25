import { PageHeader } from '@/layout/Breadcrumb'
import NavOne from "@/components/NavOne";
import TeachersDetails from "@/components/TeachersDetails";
import React from "react";

const metaTitle = 'Editorial Board'
export const metadata = {
  title: metaTitle + ' | IJEPEM',
  openGraph: {
    title: metaTitle + ' | IJEPEM'
  }
}

export default function Page() {
  return <>
      <NavOne />
      <PageHeader title="Editorial Board" />
      <TeachersDetails />
  </>
}
