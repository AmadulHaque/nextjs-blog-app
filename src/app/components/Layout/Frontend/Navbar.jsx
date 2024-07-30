import Image from 'next/image';
import Link from 'next/link';
import { getSession } from '@/lib/session';

import ProfileImg from "@/app/assets/images/profile.webp"

const Navbar = async () => {

    const session = await  getSession();

    return (
        <>
            <header className="cyksu c9epx c894v cdcpd">
                <div className="c0xm3 cwd8x cbv9p cffqt">
                    <div className="cphtx cyv0x cr9oa c84kl cosre">
                        <div className="czcmj c08ca"> 
                            <Link className="group cpe5q" href="/" aria-label="Cruip">
                                <Image src="https://preview.cruip.com/community/images/logo.svg" width={32} height={32} alt="Community" />
                            </Link>
                        </div>
                        <nav className="c84kl cxgft">
                            <ul className="cyv0x c2ll7 cb2wz c84kl cxgft">
                                {
                                    session.isLoggedIn
                                    ?
                                    <li className="ccwt3">
                                        <a className="c4pyj cmoq7   cwams " href="/dashboard"> 
                                            <Image src={ProfileImg.src} width={50} height={50}  alt="profile"  className="rounded-full" />
                                        </a>
                                    </li>
                                    : 
                                    <>
                                        <li>
                                            <Link className="c155n cpb42 cyv0x cix92 ci5c0 cas64 cv0f2 cif8u ctkuh c84kl czfkt con2m" href="/login"> Sign in </Link>
                                        </li>
                                        <li className="ccwt3">
                                            <Link className="c4pyj cmoq7 cwams cs3c2 c894v" href="/register"> Join Community </Link>
                                        </li>
                                    </>
                                }
                              
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
