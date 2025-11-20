import { Container } from "react-bootstrap";

const certificates = [
  {
    id: 1,
    title: "Introduction to Front-end Development",
    issuer: "Meta",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XMF5DVSBACAK/CERTIFICATE_LANDING_PAGE~XMF5DVSBACAK.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/XMF5DVSBACAK",
  },
  {
    id: 2,
    title: "Advanced React",
    issuer: "Meta",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HRTY5E2Y4U5T/CERTIFICATE_LANDING_PAGE~HRTY5E2Y4U5T.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/HRTY5E2Y4U5T",
  },
  {
    id: 3,
    title: "Version Control",
    issuer: "Meta",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RWL8CSJZ5GPG/CERTIFICATE_LANDING_PAGE~RWL8CSJZ5GPG.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/RWL8CSJZ5GPG",
  },
  {
    id: 4,
    title: "Django Web Framework",
    issuer: "Meta",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~01U2F5DIPAHX/CERTIFICATE_LANDING_PAGE~01U2F5DIPAHX.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/01U2F5DIPAHX",
  },
  {
    id: 5,
    title: "Mastering Laravel Framework and PHP",
    issuer: "Board Infinity",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UGK845AXTN9T/CERTIFICATE_LANDING_PAGE~UGK845AXTN9T.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/UGK845AXTN9T",
  },
  {
    id: 6,
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3GW2QYOJO5SL/CERTIFICATE_LANDING_PAGE~3GW2QYOJO5SL.jpeg",
    link: "https://coursera.org/verify/3GW2QYOJO5SL",
  },
  {
    id: 7,
    title: "Database Structures and Management with MySQL",
    issuer: "Meta",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D0LFTJHMQ0NO/CERTIFICATE_LANDING_PAGE~D0LFTJHMQ0NO.jpeg",
    link: "https://coursera.org/verify/D0LFTJHMQ0NO",
  },
  {
    id: 8,
    title: "Foundations of Data Science",
    issuer: "Google",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UFLRM9VH78AI/CERTIFICATE_LANDING_PAGE~UFLRM9VH78AI.jpeg",
    link: "https://coursera.org/verify/UFLRM9VH78AI",
  },
    {
    id: 9,
    title: "Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~AFVWRW6CN2AF/CERTIFICATE_LANDING_PAGE~AFVWRW6CN2AF.jpeg",
    link: "https://coursera.org/verify/AFVWRW6CN2AF",
  },
  {
    id: 10,
    title: "Introduction to Information Technology and AWS Cloud",
    issuer: "Amazon Web Services",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ER3AYFTD9FFD/CERTIFICATE_LANDING_PAGE~ER3AYFTD9FFD.jpeg",
    link: "https://coursera.org/verify/ER3AYFTD9FFD",
  },
  {
    id: 11,
    title: "Principles of UX/UI Design",
    issuer: "Meta",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~92HU55MEDFSF/CERTIFICATE_LANDING_PAGE~92HU55MEDFSF.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/92HU55MEDFSF",
  },
  {
    id: 12,
    title: "Introduction to Google Search Engine Optimization",
    issuer: "University of California",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Z9B5MQRJ3BD7/CERTIFICATE_LANDING_PAGE~Z9B5MQRJ3BD7.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/Z9B5MQRJ3BD7",
  },
  {
    id: 13,
    title: "Advanced Writing",
    issuer: "University of California",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~OW7WQZPLDO0H/CERTIFICATE_LANDING_PAGE~OW7WQZPLDO0H.jpeg",
    link: "https://coursera.org/verify/UYA1961R6KHR",
  },
  {
    id: 14,
    title: "Search Engine Optimization and Content Marketing",
    issuer: "IBM",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UYA1961R6KHR/CERTIFICATE_LANDING_PAGE~UYA1961R6KHR.jpeg",
    link: "https://coursera.org/verify/UYA1961R6KHR",
  },
];

export default function CertificatesPage() {
  return (
    <div className="cert-page" style={{ paddingTop: 80, paddingBottom: 40 }}>
      <Container fluid className="certificates-section">
        <div className="cert-inner">
           <h1 className="project-heading">
              My <strong className="purple">Certificates</strong>
            </h1>
          <div className="cert-grid">
          {certificates.map((c) => (
            <figure className="cert-card" key={c.id}>
              {/* clicking thumbnail opens the full-size image in a new tab */}
              <a href={c.img} target="_blank" rel="noreferrer" className="cert-link">
                <img src={c.img} alt={c.title} className="cert-thumb" />
              </a>
              <figcaption className="cert-info">
                <div className="cert-title">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <a
                  className="cert-verify"
                  href={c.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Verify ${c.title} certificate`}
                >
                  <svg
                    className="cert-verify-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                    <path d="M5 5h5v2H7v10h10v-3h2v5H5z" />
                  </svg>
                  <span>Verify</span>
                </a>
              </figcaption>
            </figure>
          ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
