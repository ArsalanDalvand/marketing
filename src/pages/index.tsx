import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import classnames from "classnames";
import Stack from "../components/Stack";
import { Heading } from "../components/Heading";
import { ExampleQuestion } from "../components/ExampleQuestion";
import { BannerCTA } from "../components/CallToActionBanner";
import ScrollingLogos from "../components/ScrollingLogos";

import richFBD from "../lib/images/rich_question_FBD.png";
import richorder from "../lib/images/rich_question_order_block.png";
import richball from "../lib/images/rich_question_balltrajectory.png";

import styles from "./index.module.scss";
import { Accordion, Carousel, CarouselItem } from "react-bootstrap";
import { RequestCourseModal } from "../components/RequestCourseModal";
import { illinois, ubc } from "../lib/images/universities";
import { siteConfig } from "../config/siteConfig";

const CAROUSEL_IMAGES = [
  {
    src: richorder,
    alt: "سوال تعاملی مرتب‌سازی بلوک‌های کد و استدلال ریاضی در سامانه",
  },
  {
    src: richball,
    alt: "سوال تعاملی رسم بردار سرعت و تحلیل توابع فیزیک",
  },
  {
    src: richFBD,
    alt: "سوال دیاگرام جسم آزاد در مکانیک مهندسی",
  },
];

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => (
  <div className="row justify-content-center">{children}</div>
);

interface ColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }) => (
  <div className="col">{children}</div>
);

interface HomeProps {
  seed: number;
}

const MAJOR_UNIVERSITY_LOGOS = [
  { alt: "دانشگاه همکار ۱", src: illinois },
  { alt: "دانشگاه همکار ۲", src: ubc },
];

const Home: React.FC<HomeProps> = ({ seed }) => {
  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>{siteConfig.brand.name} | {siteConfig.brand.tagline}</title>
        <meta property="og:title" content={siteConfig.brand.name} />
        <meta
          property="og:description"
          content={siteConfig.brand.description}
        />
      </Head>

      {/* Hero Banner */}
      <div className={classnames("container-fluid py-5", styles.banner)}>
        <div className="container-md">
          <Row>
            <Column>
              <div className="text-center mb-3">
                <span className="badge bg-light text-primary px-3 py-2 rounded-pill fw-normal fs-6 shadow-sm">
                  <i className="bi bi-stars me-1 text-warning"></i>
                  {siteConfig.hero.badge}
                </span>
              </div>
              <h1
                className={classnames(
                  "mt-2 fs-1 text-center text-white fw-bold leading-tight",
                  styles["text-wrap-balance"],
                )}
              >
                {siteConfig.hero.title}
              </h1>
              <p className="text-center text-white-50 mt-3 fs-5 mx-auto max-w-2xl">
                {siteConfig.hero.subtitle}
              </p>
              <div className="d-flex flex-row justify-content-center flex-wrap gap-3 mt-4">
                <a
                  href={siteConfig.links.appLoginUrl}
                  className="btn btn-warning btn-lg fw-bold shadow px-4 py-2"
                >
                  <i className="bi bi-box-arrow-in-left me-2"></i>
                  {siteConfig.hero.primaryCta}
                </a>
                <button
                  className="btn btn-outline-light btn-lg fw-medium px-4 py-2"
                  onClick={() => setShowRequestCourseModal(true)}
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  {siteConfig.hero.secondaryCta}
                </button>
                <a
                  href={siteConfig.links.demoCourseUrl}
                  className="btn btn-outline-warning btn-lg fw-medium px-4 py-2"
                >
                  <i className="bi bi-play-circle me-2"></i>
                  {siteConfig.hero.demoCta}
                </a>
              </div>
            </Column>
          </Row>
        </div>
      </div>

      {/* Mastery Learning & Interactive Question Preview */}
      <div className="container-fluid py-5">
        <div className="container-md">
          <Heading>{siteConfig.mastery.title}</Heading>
          <div className="row mb-4">
            <p className="fs-5 text-secondary">
              {siteConfig.mastery.description}
            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-md-6 order-1">
              <div className="p-4 bg-light rounded-3 border mb-3">
                <h5 className="fw-bold text-primary mb-2">
                  <i className="bi bi-shuffle me-2"></i>
                  {siteConfig.mastery.feature1Title}
                </h5>
                <p className="text-muted mb-0 leading-relaxed">
                  {siteConfig.mastery.feature1Desc}
                </p>
              </div>

              <div className="p-4 bg-light rounded-3 border">
                <h5 className="fw-bold text-success mb-2">
                  <i className="bi bi-check-circle me-2"></i>
                  {siteConfig.mastery.feature2Title}
                </h5>
                <p className="text-muted mb-0 leading-relaxed">
                  {siteConfig.mastery.feature2Desc}
                </p>
              </div>
            </div>
            <div className="col-md-6 order-2">
              <div className="shadow rounded overflow-hidden border">
                <ExampleQuestion seed={seed} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof & Metrics */}
      <div className={classnames("container-fluid py-5", styles.container)}>
        <div className="container-md">
          <Stack>
            <Row>
              <Column>
                <Stack spacing={3}>
                  <Heading>{siteConfig.stats.title}</Heading>
                  <p className="fs-5 text-secondary">
                    {siteConfig.stats.subtitle}
                  </p>
                </Stack>
              </Column>
            </Row>
            <Row>
              {siteConfig.stats.items.map((stat, idx) => (
                <div className="col-6 col-md-3 mt-3" key={idx}>
                  <div className="p-3 bg-white rounded-3 shadow-sm border text-center">
                    <div className="display-6 fw-bold text-primary lh-1 mb-2">
                      {stat.value}
                    </div>
                    <div className="small text-muted">{stat.label}</div>
                  </div>
                </div>
              ))}
            </Row>
            <Row>
              <Column>
                <div className="d-flex flex-sm-row flex-column justify-content-around align-items-center gap-2 flex-wrap my-md-4 my-2 opacity-75">
                  {MAJOR_UNIVERSITY_LOGOS.map((logo, index) => (
                    <div
                      key={index}
                      className={classnames(
                        styles["university-logo-container"],
                        "d-flex",
                      )}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        height={60}
                        style={{
                          objectFit: "contain",
                          maxHeight: "60px",
                          width: "auto",
                          maxWidth: "100%",
                        }}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
                <ScrollingLogos />
              </Column>
            </Row>
          </Stack>
        </div>
      </div>

      {/* Write Once, Reuse Anywhere - Talking Points Accordion */}
      <div className="container-fluid py-5">
        <div className="container-md">
          <Row>
            <Column>
              <Heading>{siteConfig.talkingPoints.title}</Heading>
              <p className="fs-5 text-secondary mb-4">
                {siteConfig.talkingPoints.description}
              </p>
              <Accordion defaultActiveKey="0" className="shadow-sm">
                {siteConfig.talkingPoints.items.map((point, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <strong className="fs-6">{point.header}</strong>
                    </Accordion.Header>
                    <Accordion.Body className="text-secondary leading-relaxed">
                      {point.body}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Column>
          </Row>
        </div>
      </div>

      {/* Advanced Capabilities / Carousel */}
      <div className={classnames("container-fluid py-5", styles.container)}>
        <div className="container-md">
          <Heading>{siteConfig.automation.title}</Heading>
          <p className="fs-5 text-secondary mb-4">
            {siteConfig.automation.description}
          </p>

          <Carousel variant="dark" controls={false} className="shadow rounded bg-white p-3 border">
            {CAROUSEL_IMAGES.map(({ src, alt }, index) => (
              <CarouselItem key={index}>
                <div
                  style={{
                    maxWidth: "750px",
                    position: "relative",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    className="pb-4 position-relative"
                    priority
                    style={{
                      aspectRatio: "3 / 2",
                      objectFit: "contain",
                      objectPosition: "center",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div className="text-center text-muted small pb-2">
                    {alt}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Open-Source Section */}
      <div className="py-5 bg-dark">
        <div className="container-md">
          <Row>
            <Column>
              <h2 className="text-white fw-bold mb-3">
                {siteConfig.openSource.title}
              </h2>
              <p className="text-white-50 fs-5 mb-4 leading-relaxed">
                {siteConfig.openSource.description}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href={siteConfig.links.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light btn-lg fw-medium shadow-sm"
                >
                  <i className="bi bi-github me-2"></i>
                  {siteConfig.openSource.githubButton}
                </a>
                <a
                  href={siteConfig.links.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-lg fw-medium"
                >
                  <i className="bi bi-book me-2"></i>
                  {siteConfig.openSource.docsButton}
                </a>
              </div>
            </Column>
          </Row>
        </div>
      </div>

      {/* Banner Call To Action */}
      <BannerCTA
        title={siteConfig.ctaBanner.title}
        subtitle={siteConfig.ctaBanner.subtitle}
        buttonLabel={siteConfig.ctaBanner.buttonLabel}
        href={siteConfig.links.appLoginUrl}
      />

      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
    </React.Fragment>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      seed: Math.random(),
    },
  };
};
