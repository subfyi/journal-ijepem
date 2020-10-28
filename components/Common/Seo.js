
import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

function title(str) {
    if (str.length >= 70) {
        const arr = str.split(" | ");
        arr.pop();
        return arr.join(" | ").substr(0,70);
    }

    return str;
}

export default class extends NextSeo {
    render() {
        var contents = super.render();
        
        if (!contents.props.children)
            return null;
        
        return <Head>
            { 
                contents.props.children
                    .map(a => a.key === "title" ? <title key="title">{title(a.props.children)}</title> : a)
            }
        </Head>;
    }
}
