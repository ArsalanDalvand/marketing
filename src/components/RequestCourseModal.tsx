import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Link from "next/link";
import { siteConfig } from "../config/siteConfig";

interface RequestCourseModalProps
  extends Pick<ModalProps, "show" | "onHide"> {}

export const RequestCourseModal: React.FC<RequestCourseModalProps> = (props) => {
  return (
    <Modal {...props} centered aria-labelledby="request-course-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="request-course-modal-title" className="fw-bold">
          {siteConfig.requestCourseModal.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <p className="text-secondary leading-relaxed">
          {siteConfig.requestCourseModal.body}
        </p>
        <div className="d-grid gap-2 my-3">
          <a
            href={siteConfig.links.appRequestCourseUrl}
            className="btn btn-primary btn-lg fw-medium shadow-sm"
          >
            <i className="bi bi-file-earmark-plus me-2"></i>
            {siteConfig.requestCourseModal.button}
          </a>
        </div>
        <p className="mb-0 text-muted small text-center mt-3">
          {siteConfig.requestCourseModal.supportPrompt}{" "}
          <Link href="/support" className="text-primary fw-medium">
            {siteConfig.requestCourseModal.supportLinkText}
          </Link>
        </p>
      </Modal.Body>
    </Modal>
  );
};
