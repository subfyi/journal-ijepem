import Link from 'next/link'
import React from 'react'

export function PageHeader(props: { title: string }) {
  return (
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li><Link href="/">Anasayfa</Link></li>
            <li className="active">{ props.title }</li>
          </ul>
          <h2 className="inner-banner__title">{ props.title }</h2>
        </div>
      </section>

  )
}

