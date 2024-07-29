import React from 'react'
import NoImage from '../UI/Icons/NoImage'
import Link from 'next/link'

export default function Item() {
  return (
    <>
        <div className="cpvd3 cb3vt cv8nv cjl5d czhaz">
            <div className="ccmpi cnoag">
                <div className="capvw cv8pf cjb54 c1or4 chj2t cqp0l c4tg7 cu12y c57kd c4j5p c9epx cun4m cfj2j caq5y" aria-hidden="true" />
                <div className="chzva cv23q cyv0x c7z86 cp9d3">
                    <div className="czcmj">
                        <div className="ccjax csai1 czcmj c84kl">
                            {/* <img className="cz39j cqp0g c9jea c57id" src="" width={24} height={24} alt="User 02" /> */}
                            <NoImage />
                        </div>
                    </div>
                    <div className="cphtx civup cyjnb cyv0x czz3y cyhzl cxgft">
                        <div>
                            <div className="c7tnu">
                                <h2>
                                    <Link className="cwgl9 cs22w cxfc3 cix92 cas64 cv0f2" href="/post/details">
                                         Love productivity? Level up your focus and personal time with the seven best calendar apps of 2022. 
                                    </Link>
                                </h2>
                            </div>
                            <div className="cyv0x c84kl">
                                <div className="c7a65 crs6u">
                                    <Link className="cjbvg cwvxj cix92 ci5c0 cas64 cv0f2" href="/up/karim"> Karim </Link>
                                     · <span className="cc30m">24 Feb</span> · <span className="cc30m"> 13 Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
