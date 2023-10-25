import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ children, className = 'breadcumb' }: {
  className?: string;
  children: React.ReactNode
}) {
  return <div className={'mb-3 ' + className}>
    <ul>
      <BreadcrumbItem title='Home' url='/' />
      {children}
    </ul>
  </div>
}

export function BreadcrumbItem({ title, url }: {
  title: string,
  url: string
}) {
  return <li>
    <Link href={url}>{title}</Link>
  </li>
}

export function PageHeader(props) {
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

