import React from "react";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Dropdown,
  NavDropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { RequestCourseModal } from "../components/RequestCourseModal";
import { siteConfig } from "../config/siteConfig";

import styles from "./Header.module.scss";

function useIsActive(href: string | string[], exact: boolean): boolean {
  const { asPath } = useRouter();
  const hrefs = Array.isArray(href) ? href : [href];
  return hrefs.some((href) =>
    exact ? asPath === href : asPath.startsWith(href),
  );
}

function useIsCurrent(href: string): boolean {
  const { asPath } = useRouter();
  return asPath === href;
}

interface NavLinkProps {
  href: string;
  activeMatchExactHref?: boolean;
  children: React.ReactNode;
}

const RouterNavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const active = useIsActive(href, false);
  const current = useIsCurrent(href);
  return (
    <Link
      href={href}
      className={classnames("nav-link", styles["nav-link"], {
        "fw-bold": active,
        [styles.active]: active,
      })}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

const NavDropdownItem: React.FC<NavLinkProps> = ({
  href,
  children,
  activeMatchExactHref = false,
}) => {
  const active = useIsActive(href, activeMatchExactHref);
  const current = useIsCurrent(href);
  return (
    <NavDropdown.Item
      className={classnames({ "fw-bold": active })}
      aria-current={current ? "page" : undefined}
      as={Link}
      href={href}
    >
      {children}
    </NavDropdown.Item>
  );
};

import logo from "../lib/images/PL-logo-blue-white.png";

export const Header: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);

  // Collapse the nav when the user navigates to a different page
  const { events } = useRouter();
  React.useEffect(() => {
    const collapseNav = () => setCollapsed(true);

    events.on("routeChangeComplete", collapseNav);
    return () => events.off("routeChangeComplete", collapseNav);
  }, [events]);

  return (
    <React.Fragment>
      <div className={classnames("container-fluid pt-3 pb-2", styles.header)}>
        <div className="container-md d-flex justify-content-between align-items-center">
          <div className="text-white small d-none d-md-block opacity-75">
            {siteConfig.brand.tagline}
          </div>
          <div className="d-flex align-items-center gap-2 ms-auto">
            <button
              className="btn btn-warning btn-sm fw-medium shadow-sm"
              onClick={() => setShowRequestCourseModal(true)}
            >
              <i className="bi bi-plus-circle me-1"></i>
              {siteConfig.nav.requestCourse}
            </button>
            <a
              href={siteConfig.links.appLoginUrl}
              className="btn btn-light btn-sm fw-medium shadow-sm"
            >
              <i className="bi bi-box-arrow-in-left me-1"></i>
              {siteConfig.nav.login}
            </a>
          </div>
        </div>
      </div>

      <nav
        className={classnames(
          "navbar navbar-expand-md navbar-dark navbar-primary shadow-sm",
          styles.header,
        )}
      >
        <div className="container-fluid container-md">
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
            <Image
              src={logo}
              width={220}
              height={48}
              alt={siteConfig.brand.name}
              className={styles.logo}
              priority
            />
          </Link>
          <div className="d-flex flex-row">
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbar"
              aria-expanded={collapsed ? "false" : "true"}
              aria-label="Toggle navigation"
              onClick={() => setCollapsed((collapsed) => !collapsed)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={classnames("navbar-collapse", { collapse: collapsed })}
            id="navbar"
          >
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <Dropdown as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  className={classnames(styles["nav-link"], {
                    [`fw-bold ${styles.active}`]: useIsActive(
                      ["/products"],
                      false,
                    ),
                  })}
                >
                  محصول و امکانات
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {siteConfig.nav.products.map((item, idx) => (
                    <NavDropdownItem
                      key={idx}
                      href={item.href}
                      activeMatchExactHref={item.href === "/"}
                    >
                      {item.label}
                    </NavDropdownItem>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  className={classnames(styles["nav-link"], {
                    [`fw-bold ${styles.active}`]: useIsActive(
                      ["/catalog"],
                      false,
                    ),
                  })}
                >
                  کاتالوگ و منابع
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {siteConfig.nav.catalog.map((item, idx) => (
                    <NavDropdownItem key={idx} href={item.href}>
                      {item.label}
                    </NavDropdownItem>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as="a"
                    href={siteConfig.links.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    مستندات طراحان سوال
                  </NavDropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <li className="nav-item">
                <RouterNavLink href="/research">پژوهش و نتایج</RouterNavLink>
              </li>
              <li className="nav-item">
                <RouterNavLink href="/support">راهنما و پشتیبانی</RouterNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
    </React.Fragment>
  );
};
