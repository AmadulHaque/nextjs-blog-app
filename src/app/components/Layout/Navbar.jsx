import Link from 'next/link';

const Navbar = () => {
  return (
    <>
        <header className="cyksu c9epx c894v cdcpd">
            <div className="c0xm3 cwd8x cbv9p cffqt">
                <div className="cphtx cyv0x cr9oa c84kl cosre">
                    <div className="czcmj c08ca"> 
                        <Link className="group cpe5q" href="/" aria-label="Cruip">
                            {/* <img src="https://preview.cruip.com/community/images/logo.svg" width={32} height={32} alt="Community" /> */}
                            Logo
                        </Link>
                    </div>
                    <nav className="c84kl cxgft">
                        <ul className="cyv0x c2ll7 cb2wz c84kl cxgft">
                            <li>
                                <Link className="c155n cpb42 cyv0x cix92 ci5c0 cas64 cv0f2 cif8u ctkuh c84kl czfkt con2m" href="/login"> Sign in </Link>
                            </li>
                            <li className="ccwt3">
                                <Link className="c4pyj cmoq7 cwams cs3c2 c894v" href="/register"> Join Community </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </>
  );
};

export default Navbar;
