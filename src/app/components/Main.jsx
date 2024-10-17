'use client';
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center" aria-label="Home">
          <Image src="/assets/img/logoadiyogi.png" width={200} height={100} alt="Adiyogi Logo" />
          <h1 className="sitename"></h1>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className="active">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li className="dropdown">
              <Link href="#" aria-haspopup="true" aria-expanded="false">
                <span>Dropdown</span>
                <i className="bi bi-chevron-down toggle-dropdown" />
              </Link>
              <ul>
                <li>
                  <Link href="#">Dropdown 1</Link>
                </li>
                <li className="dropdown">
                  <Link href="#" aria-haspopup="true" aria-expanded="false">
                    <span>Deep Dropdown</span>
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Dropdown 2</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 3</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
      </div>
    </header>
  );
}
