import React from 'react'
import {PageHeader} from '@/layout/Breadcrumb'
import NavOne from "@/components/NavOne";

export default function Loading() {
    return <>
        <NavOne/>
        <PageHeader title={'Loading'}/>
        <div className='container my-5'>
            <div className='row service-wrap my-5'>
                <div className='col my-5'>
                    <p className='my-5'>
                        Loading...
                    </p>
                </div>
            </div>
        </div>
    </>
}

