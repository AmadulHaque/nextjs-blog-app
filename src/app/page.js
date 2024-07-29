import HeroSec from "./components/Home/HeroSec";
import Item from "./components/Post/Item";
import Link from "next/link";
import CategoryPost from "./components/Layout/CategoryPost";
import { getSession } from '@/lib/session';

export default function Home() {

  let session = getSession()

  console.log(session.isLoggedIn);

  return (
    <> 
        {/* Hero section */}
        <HeroSec/>

        <section>
          <div className="c0xm3 cwd8x cbv9p cffqt">
            <div className="c39hn crdo7 cj9x5 ctxr2"> {/* Main content */}
              <div className="crett cf8g7 cqmr5 cqn89">
                <div className="cadhr cn0gg">
                  {/* List */} 

                  <div>
                    {/* Content header */} 
                    <div className="cvkh0 ci034 cntrh clrry">
                      <div className="cphtx cysk4 cyv0x ca2yl ctxr2"> {/* Right: Button */} 
                        <div className="ca9xt cb3mh ci2rb chkqi">
                          <button className="c4pyj cmoq7 cwams cy2b1 cs3c2"> Create Post </button>
                        </div> {/* Left: Links */} 
                        <ul className="cwqbk ci5c0 cb2wz ctkuh ct3ph cvktr cxgft">
                          <li className="czfkt ckxav">
                            <a className="cwvxj cix92 cas64 cv0f2 ccmpi" href="#0">
                              <svg className="c9y4x c9epx c9sw0" width={53} height={6} xmlns="http://www.w3.org/2000/svg">
                                <path fillOpacity=".64" d="M50.363.872c2.487.543 2.08.136 2.014.404l.623.318-.47.455.113.18c-.03.031-.066.098-.097.095-.77-.08-1.515.287-2.292.213-.779-.074-1.573-.116-2.345.015-.628.106-1.25.138-1.878.17-.194.01-.352-.217-.587-.036-.176.136-.45.027-.68.027h-1.45c-.23.001-.46.004-.689.011-.016 0-.032.042-.09.124l.58.103-.002.122c-.24.008-.48.02-.72.023-.254.005-.507.003-.76 0-.043 0-.107.003-.126-.032-.255-.476-.542-.417-.882-.174-.127.092-.317.015-.478.015-2.164 0-4.328-.005-6.491.007-.236.002-.508-.16-.705.184-.009.015-.056.015-.065 0-.195-.318-.416.156-.57-.012-.2-.217-.335-.18-.523-.001-.057.054-.207-.043-.3-.11-.13-.093-.123-.221-.001-.334-.024-.04-.044-.1-.073-.113-.04-.016-.112-.016-.127.017-.045.098-.051.24-.107.317-.073.103-.18.222-.272.224-.16.002-.356-.182-.472-.103-.185.127-.302.111-.486.007-.125-.071-.31.1-.47.103-.643.015-1.286.006-1.914.006l-.17-.384-.333.395c-.269.094-.735-.262-1.016.387l-.227-.348c-.546.213-1.075.243-1.602-.008-.546.35-1.111.045-1.663.165.012-.177.04-.377.024-.385-.215-.1-.18.172-.241.355h-.732l-.097.369c-.032-.022-.077-.033-.093-.069-.132-.278-.356-.392-.533-.268-.415.292-.841.137-1.261.17-.361.028-.725.006-1.095.145l.665.093c-.507.062-1.045.459-1.423-.179-.266.053-.478.128-.691.133-.663.016-1.326.006-1.975.006l-.11.441-.294-.615c-.046.264-.155.537-.353.348-.209-.2-.329-.062-.52-.01-.35.098-.723.028-1.097.153l.523.114c-.028.063-.047.14-.066.14-.507.007-1.015.038-1.52-.005-.372-.032-.732-.264-1.117-.18-.062.013-.124.038-.186.147l.554.08c-.578.083-1.143.302-1.726.002-.257-.133-.58-.022-.89.08l.385.132c-.023.05-.04.128-.06.128-.23.007-.459.002-.688 0-.124-.405-.308.196-.496-.07-.122-.173-.376.234-.623-.082-.134-.171-.474-.03-.731.094l.543.119c-.04.061-.064.132-.09.133-.345.007-.69-.017-1.035.009-.672.049-1.354.045-2.01.219-.355.094-.702.113-1.052.172-.3.05-.593.198-.71.75-.12 0-.387.067-.41-.01-.103-.338-.415-.373-.485-.664C.78 5.025.67 4.94.507 4.813c-.33-.258-.4-.75-.234-1.23C.183 3.447.09 3.312 0 3.18c.004-.07-.01-.153.013-.19.258-.407.56-.616.973-.687.676-.117 1.336-.405 2.029-.36.397-.337.836-.132 1.255-.195.327-.049.65-.15.979-.182.32-.032.677.114.958-.036.405-.215.8-.188 1.193-.146.504.053.969-.23 1.463-.213.506.016 1.034.13 1.515-.024.928-.298 1.863-.001 2.777-.184C14.289.736 15.433.957 16.55.758 18.056.488 19.555.693 21.055.6c.183-.011.368.001.552-.002.155-.003.325.057.429-.183.082.303.26-.03.404.116.087.09.306-.096.47-.119.182-.025.367-.005.552-.005h2.071c.184 0 .37-.02.553.004.215.028.429-.073.653.14.107.102.358-.13.545-.137.575-.021 1.15.006 1.726-.015.214-.007.455.14.637-.18.12-.21.21.367.39.052.057-.1.344-.116.375-.044.174.403.37-.21.503.039.188.352.305-.062.457-.049.085.008.17.045.255.068.149.04.386.182.432.104.189-.318.41-.006.617-.128.215-.127.495-.046.746-.046 4.512 0 9.024.009 13.536-.012.601-.003 1.223.207 1.807-.18.307.366.61-.041.922-.022.965.058 1.932.021 2.964.021-.034.15-.055.365-.09.37-.488.062-.96.248-1.462.222-1.011-.051-2.025-.016-3.038-.011-.037 0-.073.06-.11.091.046.033.09.078.139.095.121.041.233.254.377.012.037-.064.175-.01.267-.01 1.334 0 2.667 0 1.629.08-2.406.048-2.403.014-2.4-.02-.214-.08-.425-.185-.643-.23-.116-.024-.847.01-.952-.01-.089-.017-.227-.064-.265-.003-.188.302-.426.177-.641.178-3.27.007-6.54.008-9.811-.003-.192 0-.41.141-.585-.124-.033-.051-.154-.076-.178-.04-.21.315-.475.133-.712.167-.487.072-.985-.115-1.468.18-.137.082-.345-.038-.516-.09-.328-.103-.655-.177-.975.033-.112.073-.25-.201-.343.059-.176-.31-.473-.26-.627-.148-.256.188-.44-.167-.657-.03-.038.024-.096.017-.12.055-.114.18-.195.14-.344.027-.144-.108-.369-.14-.521-.062-.198.101-.436.179-.588.136-.236-.067-.436.023-.651.035-1.685.086-3.37-.117-5.058.171-1.259.215-2.536-.077-3.813.182-1.161.235-2.352-.06-3.535.198-.932.204-1.896-.086-2.845.198-.44.131-.92-.018-1.378.034-.42.048-.83-.087-1.27.125-.411.198-.908.048-1.368.058-.07.002-.141.038-.212.058.094.131.18.135.265.13.81-.038 1.617.014 2.433-.16.98-.21 1.983.057 2.984-.192.928-.232 1.904.174 2.84-.227.13-.056.243.369.373.016.15.316.29-.02.434-.024 1.133-.033 2.273.158 3.399-.173.151-.044.377-.08.463.033.196.258.292-.145.462-.056.141.074.318.016.48.016.92 0 1.842.01 2.763-.008.237-.004.5.146.713-.164.024-.035.149.077.23.102.106.033.28.115.312.056.129-.233.205-.03.315-.006.109.024.236-.16.355-.16.192 0 .417-.134.57.16.134-.22.317-.173.49-.17.175.001.37-.08.494.186.125-.272.322-.185.497-.186 1.151-.005 2.303.034 3.454-.013 1.132-.047 2.275.219 3.398-.182.138.185.318.085.473.103.2.023.406-.094.61-.095.236 0 .495-.113.698.168.226-.344.52-.165.777-.166 3.04-.015 6.08-.01 9.12-.011.222 0 .444-.019 3.074-.11" />
                              </svg>
                              <span>Popular</span>
                            </a>
                          </li>
                          <li className="czfkt ckxav">
                            <a className="c155n cc30m cix92 cas64 cv0f2" href="#0">
                              <span>Newest</span>
                            </a>
                          </li>
                          <li className="czfkt ckxav">
                            <a className="c155n cc30m cix92 cas64 cv0f2" href="#0">
                              <span>Following</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> 
                    {/* Posts */} 
                    <div className="cjmlf">

                      {/* List container */} 
                      <div className="c7z86 clzjs ciylz c84kl"> 
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                      </div> 
                      
                      {/* Show more */} 
                      <div className="c5lzi">
                        <Link href='/post' className="c15ll cb3vt cv8nv cjl5d c2h7h czhaz cwvxj cy2b1 cs3c2 cbsef cobpv"> Show More <span className="ctuiw c77ks">-&gt;</span> </Link>
                      </div>

                    </div>
                  </div> 


                  {/* Boxes */}
                  <div className="c6z63 cw7rl cnyjf">

                    <div className="cb3vt cv8nv cjl5d czhaz ccmpi cnoag">
                      <div className="capvw cv8pf cjb54 c1or4 chj2t cqp0l c4tg7 cu12y c57kd c4j5p c9epx cun4m cfj2j caq5y" aria-hidden="true" />
                      <div className="clzjs c6pi3 c84kl">
                        <div className="cv0nq cxgft">
                          {/* <img className="cu367" src="./images/box-icon-01.svg" width={40} height={40} alt="News icon" /> */} img
                          <h3 className="cs22w cxfc3 cv0nq">News Updates</h3>
                          <p className="cc30m ctkuh"> Check out the latest news and updates from the community. </p>
                        </div>
                        <div className="c5lzi">
                          <Link className="cjbvg cwvxj cix92 ci5c0 cas64 cv0f2 ctkuh" href="/post/details" > Learn More <span className="ctuiw">-&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </div> 

                    <div className="cb3vt cv8nv cjl5d czhaz ccmpi cnoag">
                      <div className="capvw cv8pf cjb54 c1or4 chj2t cqp0l c4tg7 cu12y c57kd c4j5p c9epx cun4m cfj2j caq5y" aria-hidden="true" />
                      <div className="clzjs c6pi3 c84kl">
                        <div className="cv0nq cxgft">
                          {/* <img className="cu367" src="./images/box-icon-02.svg" width={40} height={40} alt="Resources icon" /> */} img
                          <h3 className="cs22w cxfc3 cv0nq">Other Resources</h3>
                          <p className="cc30m ctkuh"> Books, guides, and webinars full of industry standard to grow your startup. </p>
                        </div>
                        <div className="c5lzi">
                          <Link className="cjbvg cwvxj cix92 ci5c0 cas64 cv0f2 ctkuh" href="/post/details"> Learn More <span className="ctuiw">-&gt;</span> </Link>
                        </div>
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
        </section>

    </>
  );
}
