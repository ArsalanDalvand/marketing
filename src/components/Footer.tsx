import Link from "next/link";
import React from "react";
import { siteConfig } from "../config/siteConfig";

interface FooterLinkProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, external, children }) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="link-secondary text-decoration-none"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="link-secondary text-decoration-none">
      {children}
    </Link>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-light pt-5 pb-4 border-top">
      <div className="container-md">
        <div className="row g-4">
          <div className="col-12 col-md-4 mb-3">
            <h5 className="fw-bold text-primary mb-2">
              {siteConfig.brand.name}
            </h5>
            <p className="text-muted small leading-relaxed">
              {siteConfig.brand.description}
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href={siteConfig.links.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-secondary fs-5"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={siteConfig.links.docsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-secondary fs-5"
                aria-label="Documentation"
              >
                <i className="bi bi-book"></i>
              </a>
              <a
                href={`mailto:${siteConfig.links.supportEmail}`}
                className="text-secondary fs-5"
                aria-label="Email Support"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              {siteConfig.footer.resourcesTitle}
            </h6>
            <ul className="list-unstyled">
              {siteConfig.footer.resources.map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <FooterLink href={item.href} external={item.external}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              {siteConfig.footer.legalTitle}
            </h6>
            <ul className="list-unstyled">
              {siteConfig.footer.legal.map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <FooterLink href={item.href} external={item.external}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-4 col-md-3 mb-3">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              {siteConfig.footer.aboutTitle}
            </h6>
            <ul className="list-unstyled">
              {siteConfig.footer.about.map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <FooterLink href={item.href} external={item.external}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-top pt-3 mt-3 text-center text-muted small">
          {siteConfig.footer.copyright} &mdash; توسعه‌یافته و بومی‌سازی‌شده توسط{' '}
          <a
            href="https://t.me/b_7vat4r"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none fw-medium text-dark"
            title="ارسلان دالوند (arsalan_dalvand@mathdep.iust.ac.ir)"
          >
            ارسلان دالوند
          </a>{' '}
          (دانشکده ریاضی دانشگاه علم و صنعت ایران)
        </div>
      </div>
    </footer>
  );
};
