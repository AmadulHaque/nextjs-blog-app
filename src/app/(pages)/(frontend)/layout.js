import Footer from '@/app/components/Layout/Frontend/Footer'
import Navbar from '@/app/components/Layout/Frontend/Navbar'

import "@/app/style.css";

export default function layout({children}) {
  return (
    <>
        <div className="ciknu c4xpn crvnt clzjs c84kl">
            <Navbar/>
              <main className="cxgft">
                {children}
              </main>
            <Footer/>
        </div>
    </>
  )
}
