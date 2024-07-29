import Link from 'next/link'
import React from 'react'

export default function CategoryPost() {
  return (
    <>
        <div>
            <div className="c7a65 cxfc3 ckteh crs6u chkqi"> PHP - Projects </div>
            <ul className="c7z86">

                <li>
                    <h3 className="ctkuh cv0nq">
                        <Link className="cwgl9 cs22w cxfc3 cix92 cas64 cv0f2" href="/post/details"> Search Startup Jobs - Week 5 - Build in Public - Slow Week </Link>
                    </h3>
                    <div className="c7a65 crs6u">
                        <span className="cc30m">22 Feb</span> ·{" "} <span className="cc30m">14 Comments</span>
                    </div>
                </li>
            
            </ul>
        </div> 

        <div className="cchtm">
            <div className="cb3vt cv8nv cjl5d czhaz ccmpi cnoag">
                <div className="capvw cv8pf cjb54 c1or4 chj2t cqp0l c4tg7 cu12y c57kd c4j5p c9epx cun4m cfj2j caq5y" aria-hidden="true" />
                    <div className="cv8nv crm28 cdp3t cxfc3 cm97t c7ur1 cjniy ca2yl cu367"> Get the best of Community, directly in your inbox. </div>
                    <div className="c894v">
                        <label className="cxjuz ctkuh cpe5q" htmlFor="newsletter"> Email </label>
                        <form className="cyv0x ccmpi c34lr cbv9p c84kl">
                            <input id="newsletter" type="email" className="cqp0g c9yrh cy2b1 c894v cd712" placeholder="Your email" />
                            <button type="submit" className="cyn3u c9epx cun4m" aria-label="Subscribe">
                                <svg className="cwvxj chxkd czcmj cft2z czcpi cs8zy" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}
