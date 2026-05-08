import React from 'react'
import Link from 'next/link'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error-message">
                                <h3>404</h3>
                                <h4>we’re sorry page not found</h4>
                                <Link onClick={ClickHandler} href="/" className="theme-btn">Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;