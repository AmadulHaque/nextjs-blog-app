
import IllustrationHero from '@/app/components/UI/Icons/IllustrationHero';
import Link from 'next/link';

export const metadata = {
  title:"MyBlog || Login ",
  description:"MyBlog || Login "
}

export default function Login() {

  return (
    <>
      <section className="ccmpi">
        <div className="c1or4 cbm4u cv89m c9epx cfj2j" aria-hidden="true">
          <IllustrationHero/>
        </div>
        <div className="c0xm3 ccmpi cwd8x cbv9p cffqt">
          <div className="crett ckxfr cqmr5 cd3md"> {/* Page header */} 
            <div className="ca2yl cfeqe cbv9p">
              <h1 className="cv8nv crm28 cdp3t cm97t c7ur1 cv5ei cjniy cqmr5 chc94"> Login  </h1>
            </div> {/* Form */} 
            <div className="cg2hf cbv9p">
              <form>
                <div className="ckw57">
                  <div>
                    <label className="cxjuz" htmlFor="email"> Email </label>
                    <input id="email" className="c9yrh ctkuh c894v" type="email" placeholder="Your email" required="" />
                  </div>
                  <div>
                    <label className="cxjuz" htmlFor="password"> Password </label>
                    <input id="password" className="c9yrh ctkuh c894v" type="password" placeholder="Your password" autoComplete="on" required="" />
                  </div>
                </div>
                <div className="cphsf">
                  <button className="c4pyj cmoq7 cwams cs3c2 c894v">Sign In</button>
                </div>
              </form> {/* Divider */} 
              <div className="cyv0x ca4hs c84kl">
                <div className="cvkh0 cc2e0 cnjis cxgft" aria-hidden="true" />
                <div className="cpb42 crs6u c8dwh">Or</div>
                <div className="cvkh0 cc2e0 ccwt3 cxgft" aria-hidden="true" />
              </div> {/* Social login */} 
              <button className="c15ll cb3vt cv8nv cjl5d c2h7h czhaz cwvxj c9j93 ccmpi cs3c2 c894v cbsef c84kl cmu8g">
                <div className="cyv0x c609k c84kl">
                  <svg className="c9y4x czcmj crhvt c0zsg" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                  </svg>
                </div>
                <span className="c0hys cww3t">Sign In With Google</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
