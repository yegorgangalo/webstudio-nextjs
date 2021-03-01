import { useRef, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Header() {
    /* --------mobile MENU------------- */
    const menuBtnUseRef = useRef(null);
    const mobileMenuUseRef = useRef(null);

    useEffect(() => {
        if (menuBtnUseRef && mobileMenuUseRef) {
          const menuBtnRef = menuBtnUseRef.current;
          const mobileMenuRef = mobileMenuUseRef.current;

          menuBtnRef.addEventListener("click", () => {
          const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

          menuBtnRef.classList.toggle("is-open");
          menuBtnRef.setAttribute("aria-expanded", !expanded);

          mobileMenuRef.classList.toggle("is-open");
        });
      }
    }, [menuBtnUseRef, mobileMenuUseRef])
/* =========================================== */
    /* --------height HEADER------------- */
    const headerUseRef = useRef(null);
    useEffect(() => {
      if (headerUseRef) {
          const { height } = headerUseRef.current.getBoundingClientRect();
          document.body.style.paddingTop = `${height}px`;
      }
    }, [headerUseRef])
/* =========================================== */
    const router = useRouter();

    return (
        <header className="header" ref={headerUseRef}>
              <div className="container">
                  <Link href={`/`}>
                      <a lang="en-us" className="logo link"
                      >Web<span className="logo-studio">Studio</span>
                      </a>
                  </Link>

                  <button type="button" className="menu-button" aria-expanded="false" aria-controls="menu-container" ref={menuBtnUseRef}>
                    <svg aria-label="переключатель мобильного меню" width="40" height="40">
                      <use className="icon-close" href="./images/sprite.svg#menu-burger-close"></use>
                      <use className="icon-open" href="./images/sprite.svg#menu-burger-open"></use>
                    </svg>
                  </button>

                  <div className="menu-container" id="menu-container" ref={mobileMenuUseRef}>
                    <nav className="main-nav">
                      <ul className="site-nav list">
                        <li className="item">
                            <Link href={`/`}>
                                <a className={router.pathname == "/" ? "link current" : "link"}>Студия</a>
                            </Link>
                      </li>
                      <li className="item">
                          <Link href={`/portfolio`}>
                                <a className={router.pathname == "/portfolio" ? "link current" : "link"}>Портфолио</a>
                          </Link>
                      </li>
                        <li className="item">
                            <a href="#footer" className="link">Контакты</a>
                        </li>
                      </ul>
                    </nav>
                    <ul className="site-contact list">
                      <li className="item">
                        <a href="mailto:info@devstudio.com" lang="en-us" className="link">
                          <svg className="contact-icon" width="16" height="12">
                            <use href="./images/sprite.svg#contact-envelope-1" />
                          </svg>
                          info@devstudio.com
                        </a>
                      </li>
                      <li className="item">
                        <a href="tel:+380961111111" className="link">
                          <svg className="contact-icon" width="10" height="16">
                            <use href="./images/sprite.svg#contact-smartphone-2" />
                          </svg>
                          +380 96 111 11 11
                        </a>
                      </li>
                    </ul>
                  </div>

              </div>
            </header>
    )
}
