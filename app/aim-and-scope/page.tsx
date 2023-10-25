
import { PageHeader } from '@/layout/Breadcrumb'
import NavOne from "@/components/NavOne";
import Teachers from "@/components/Teachers";
import React from "react";

const metaTitle = 'Aim and Scope'
export const metadata = {
    title: metaTitle + ' | IJEPEM',
    openGraph: {
        title: metaTitle + ' | IJEPEM'
    }
}
export default function Page() {
    return <>
            <NavOne />
            <PageHeader title="Aim and Scope" />
            <Teachers />
    </>;
}
