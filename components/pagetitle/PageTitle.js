import React from 'react'
import Link from 'next/link'

const PageTitle = (props) => {
    return (
        <section className="page-title">
            <h2 className="d-none">Hide</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="breadcumb-wrap">
                            <ol className="breadcumb-wrap">
                                <li><Link href="/home">Home</Link></li>
                                <li>{props.pagesub}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;

