import CategoryPost from '@/app/components/Layout/CategoryPost'
import NoImage from '@/app/components/UI/Icons/NoImage'
import Link from 'next/link'
import React from 'react'

export default function page({props}) {
  return (
    <> 
      <section>
        <div className="cbv9p c0xm3 cffqt cwd8x">
          <div className="cxeoc cvf0z">
            <div className="ctxr2 crdo7 cj9x5 c39hn"> {/* Page content */} 
              <div className="cqmr5 cqn89 cf8g7 crett">
                <div className="cn0gg cxolx">
                  <div className="c84kl clzjs c12xj cw9ka civup cyjnb">
                      <div className="czcmj">
                          {/* user img */}
                          <NoImage/>
                      </div> 
                      <div>
                      <article className="cntrh">

                        <header className="c9n6n">
                          <h1 className="chc94 chkqi cv5ei cs22w"> Vertical SaaS vs Horizontal SaaS: 7 key differences </h1>
                          <div className="c84kl cyv0x">
                            <div className="ctkuh c7a65">
                              <Link className="ci5c0 cwvxj cv0f2 cix92 cas64 cjbvg" href="/up/karim" > karim </Link> <span className="cc30m">24 Feb</span> ·<span className="cc30m">13 Comments</span>
                            </div>
                          </div>
                        </header> 

                        <div className="c12xj cpb42">

                          {/* post details */}
                          <p> SaaS adoption is snowballing. A recent Harvey Nash survey revealed that SaaS was voted the most important technology in helping achieve business goals. </p>
                          
                        </div>
                      </article>

                       {/* Comment form */} 
                       <form className="chkqi">
                          <div className="c0be6 c894v">
                            <label className="cxjuz" htmlFor="comment"> Comment </label>
                            <textarea id="comment" rows={4} className="c75mk c894v c8ebi" placeholder="Say something nice to IndieMark…" defaultValue={""} />
                          </div>
                          <div className="c5lzi">
                            <button className="cs3c2 cmoq7 cy2b1 cwams c4pyj" type="submit"> Post Comment </button>
                          </div>
                      </form> 



                       {/* Comments */} 
                      <div>
                        <h4 className="c7tnu c1oym cs22w">4 comments</h4>
                        <ul>
                           {/* Comments (1nd level) */}
                          <li className="criia">
                            <div className="cv0nq">
                              <div className="cv0nq c84kl cyv0x">
                                {/* <img className="cmlze cqp0g" src="./images/avatar-12.jpg" width={20} height={20} alt="User 12" /> */}
                                <NoImage/>
                                <div className="crs6u c7a65">
                                  <a className="ci5c0 cwvxj cv0f2 cix92 cas64 cjbvg" href="#0"> User 1 </a>{" "} · <span className="cc30m">20 Feb</span>
                                </div>
                              </div>

                              <div className="cv0nq ckw57 ctkuh cpb42">
                                <p> My reasons for not signing up are apparent: 1) Unable to access 2) Can't open it properly in my web browser... but I followed you here. </p>
                                <p> Can't answer anymore to your comment. Maybe we have reached the maximum depth of a thread. Let's talk it through outside the Community if that makes sense to you. </p>
                              </div>
                              <div className="crs6u c7a65">
                                <a className="ci5c0 cc30m cv0f2 cix92 cas64 c155n" href="#0"> Report </a>{" "} ·{" "} <a className="cs22w cqyfu cxmpz" href="#0"> Reply </a>
                              </div>
                            </div>

                             {/* Comments (2nd level) */}
                             <ul className="cr2bf c2h7h cy83k">
                              <li className="criia">

                                <div className="cv0nq">
                                  <div className="cv0nq c84kl cyv0x">
                                    {/* <img className="cmlze cqp0g" src="./images/avatar-09.jpg" width={20} height={20} alt="User 09" /> */}
                                    <NoImage/>
                                    <div className="crs6u c7a65">
                                      <a className="ci5c0 cwvxj cv0f2 cix92 cas64 cjbvg" href="#0"> User 2 </a>{" "} · <span className="cc30m">20 Feb</span>
                                    </div>
                                  </div>
                                  <div className="cv0nq ckw57 ctkuh cpb42">
                                    <p>A very well written Comment. Thank you.</p>
                                  </div>
                                  <div className="crs6u c7a65">
                                    <a className="ci5c0 cc30m cv0f2 cix92 cas64 c155n" href="#0"> Report </a>{" "} ·{" "} <a className="cs22w cqyfu cxmpz" href="#0"> Reply </a>
                                  </div>
                                </div> 

                                {/* Comment (3rd level) */} 
                                <ul className="cr2bf c2h7h cy83k">
                                  <li className="criia">
                                    <div className="cv0nq">
                                      <div className="cv0nq c84kl cyv0x">
                                        {/* <img className="cmlze cqp0g" src="./images/avatar-12.jpg" width={20} height={20} alt="User 12" /> */}
                                        <NoImage/>
                                        <div className="crs6u c7a65">
                                          <a className="ci5c0 cwvxj cv0f2 cix92 cas64 cjbvg" href="#0"> User 3 </a>{" "} · <span className="cc30m">20 Feb</span>
                                        </div>
                                      </div>
                                      <div className="cv0nq ckw57 ctkuh cpb42">
                                        <p> Thanks for ur kindly comment. Tbh im totally new to Webflow and still figure it out haha </p>
                                      </div>
                                      <div className="crs6u c7a65">
                                        <a className="ci5c0 cc30m cv0f2 cix92 cas64 c155n" href="#0"> Report </a>{" "} ·{" "} <a className="cs22w cqyfu cxmpz" href="#0"> Reply </a>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                  
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <aside className="c04mb crett c5pkg c4r81 cqmr5 cqn89">
                <div className="c6ng7 cdmft"> 
                  <div className="c12xj"> 
                  <form>
                      <div className="cb2wz c84kl">
                        <div className="c894v">
                          <label className="cxjuz ctkuh cpe5q" htmlFor="search"> Search </label>
                          <div className="cyv0x ccmpi c84kl">
                            <input id="search" type="search" className="cqp0g c9yrh c894v c57b5 ckxav" />
                            <div className="co4ek cyv0x c74ic c9epx cun4m c84kl">
                              <svg className="czcmj cft2z crhvt c0zsg" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path className="c08us" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* CategoryPost */} 
                      <CategoryPost/>

                  </div>
                </div>
              </aside>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
