import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  FiExternalLink,
  FiGithub,
  FiMaximize2,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";

export default function ProjectPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const projects = [
    {
      id: 1,
      name: "NoxVenues - Event & Venue Booking Platform",
      category: "client",
      badgeText: "Client Project",
      projectLink: "https://noxvenues.com/",
      tags: [
        "Next.js",
        "AWS Lightsail",
        "AWS S3",
        "SEO Optimization",
        "Speed Optimization",
        "Cloud Architecture",
      ],
      description:
        "NoxVenues is an event and venue booking platform in Saudi Arabia, built with Next.js, optimized for maximum SEO visibility and performance. Configured and hosted on AWS Lightsail with heavy media and asset storage integrated on AWS S3 for fast, scalable delivery.",
      images: [
        require("../../images/NoxVenues/NoxVenues.png"),
      ],
    },
    {
      id: 2,
      name: "GetHardMoney - U.S. Lending Platform",
      category: "client",
      badgeText: "Client Project",
      projectLink: "https://gethardmoney.com/",
      tags: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Stripe",
        "Real-Time Chat",
        "Interactive Map",
      ],
      description:
        "GetHardMoney is a U.S. lending platform built with Next.js, NestJS, and PostgreSQL. The platform supports lenders, borrowers, brokers, investors, and insurance providers. Borrowers and brokers can submit loan requests visible to lenders, while an interactive U.S. map helps users explore lenders by region. Investors can secure property insurance by submitting details once and receiving quotes from multiple providers. Key features include a comprehensive dashboard, real-time chat, and Stripe integration.",
      images: [
        require("../../images/GetHardMoney/GetHardMoney(1).png"),
        require("../../images/GetHardMoney/GetHardMoney(2).png"),
        require("../../images/GetHardMoney/GetHardMoney(3).png"),
        require("../../images/GetHardMoney/GetHardMoney(4).png"),
        require("../../images/GetHardMoney/GetHardMoney(5).png"),
        require("../../images/GetHardMoney/GetHardMoney(6).png"),
        require("../../images/GetHardMoney/GetHardMoney(7).png"),
      ],
    },
    {
      id: 2,
      name: "InnerLight - Health & Wellness Platform",
      category: "client",
      badgeText: "Client Project",
      projectLink: "https://innerlightacademy.en/",
      tags: [
        "MERN Stack",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Zoom API",
        "WhatsApp Integration",
      ],
      description:
        "InnerLight is built with the MERN Stack, featuring APIs for the Admin Panel and Mobile Application. The platform provides services such as training courses, meditation and breathwork sessions (recorded & live), private sessions (online & physical), retreats, and free webinars. Designed for users, healers, instructors, and web admin. Users can register and subscribe to live offerings and receive Zoom meeting links directly via WhatsApp.",
      images: [
        require("../../images/InnerLight/InnerLight (1).png"),
        require("../../images/InnerLight/InnerLight (2).png"),
        require("../../images/InnerLight/InnerLight (3).png"),
        require("../../images/InnerLight/InnerLight (4).png"),
      ],
    },
    {
      id: 3,
      name: "TheCareMd - Telemedicine Platform",
      category: "client",
      badgeText: "Client Project",
      projectLink: "https://thecaremd.com/",
      tags: [
        "Next.js",
        "Express",
        "Node.js",
        "LegitScript Certified",
        "Telehealth Portal",
        "Stripe",
      ],
      description:
        "The CareMD is a telemedicine platform built with Next.js and Express, connecting patients with licensed U.S. healthcare providers for remote consultations. Patients can schedule appointments, receive online prescriptions, and access lab tests online, while providers manage patient care efficiently through a centralized dashboard. LegitScript certified for data security.",
      images: [
        require("../../images/CareMD/CareMD.png"),
        require("../../images/CareMD/CareMD (1).png"),
        require("../../images/CareMD/CareMD (2).png"),
        require("../../images/CareMD/CareMD (3).png"),
      ],
    },
    {
      id: 4,
      name: "BlockWire - Press Release Distribution Platform",
      category: "client",
      badgeText: "Client Project",
      projectLink: "https://press.block-wire.com/",
      tags: ["React", "Node.js", "PostgreSQL", "Firebase Auth", "Media Publishing"],
      description:
        "BlockWire is a media distribution platform for creating and distributing press releases, built with React, Node.js, and PostgreSQL, using Firebase authentication for secure access. Users can create, edit, track submissions, and publish media content with high reach and performance analytics.",
      images: [
        require("../../images/BlockWire/BlockWire (1).png"),
        require("../../images/BlockWire/BlockWire (2).png"),
        require("../../images/BlockWire/BlockWire (3).png"),
        require("../../images/BlockWire/BlockWire (4).png"),
      ],
    },
    {
      id: 5,
      name: "RetrieveMyItem - Lost & Found Platform",
      category: "fullstack",
      badgeText: "Full-Stack Web App",
      projectLink: "https://retrievemyitem.web.app/",
      tags: [
        "ReactJS",
        "Laravel",
        "MySQL",
        "Ownership Quiz Verification",
        "Real-Time Chat",
      ],
      description:
        "RetrieveMyItem connects people who have lost items with those who found them. Both owners and finders register item listings with photos. Features a search filtering system, an ownership validation quiz to prevent fraud, and secure real-time chat between verified users.",
      images: [
        require("../../images/RetrieveMyItem/HomePage1.png"),
        require("../../images/RetrieveMyItem/Signup.png"),
        require("../../images/RetrieveMyItem/Login.png"),
        require("../../images/RetrieveMyItem/UserProfile.png"),
        require("../../images/RetrieveMyItem/uploaditem.png"),
        require("../../images/RetrieveMyItem/ClaimItem.png"),
        require("../../images/RetrieveMyItem/QuizForm.png"),
        require("../../images/RetrieveMyItem/Notifications.png"),
        require("../../images/RetrieveMyItem/Posts.png"),
        require("../../images/RetrieveMyItem/Chatbox.png"),
        require("../../images/RetrieveMyItem/Services.png"),
      ],
    },
    {
      id: 6,
      name: "I-Hostel - Hostel Management System",
      category: "opensource",
      badgeText: "Open Source",
      githubLink:
        "https://github.com/sulemansaeed73/I-Hostel-Management-System",
      tags: [
        "Laravel Framework",
        "PHP",
        "MySQL",
        "Real-Time Notifications",
        "Property Listings",
      ],
      description:
        "I-Hostel is a comprehensive hostel management system connecting property owners with tenants. Owners showcase properties with photo galleries, amenities, and room availability. Includes filter search and instantaneous push notifications.",
      images: [
        require("../../images/HostelManagementSystem/Signup.png"),
        require("../../images/HostelManagementSystem/Login.png"),
        require("../../images/HostelManagementSystem/Menu.png"),
        require("../../images/HostelManagementSystem/Users.png"),
        require("../../images/HostelManagementSystem/Update.png"),
        require("../../images/HostelManagementSystem/List.png"),
      ],
    },
    {
      id: 7,
      name: "Everytize - Local Utility Directory",
      category: "fullstack",
      badgeText: "Full-Stack Directory",
      tags: [
        "MERN Stack",
        "ReactJS",
        "Tailwind CSS",
        "Express",
        "MongoDB",
        "Geolocation Search",
      ],
      description:
        "Everytize is a local directory web application for discovering essential services (electricians, plumbers, local restaurants). Features listing management, interactive map views, user review ratings, and business visibility tools.",
      images: [
        require("../../images/Everytize/EverytizePage1.png"),
        require("../../images/Everytize/EverytizePage2.png"),
        require("../../images/Everytize/EverytizePage3.png"),
        require("../../images/Everytize/EverytizePage4.png"),
        require("../../images/Everytize/EverytizePage5.png"),
        require("../../images/Everytize/EverytizePage6.png"),
        require("../../images/Everytize/EverytizePage7.png"),
        require("../../images/Everytize/EverytizePage8.png"),
        require("../../images/Everytize/EverytizePage9.png"),
        require("../../images/Everytize/EverytizePage10.png"),
        require("../../images/Everytize/EverytizePage11.png"),
        require("../../images/Everytize/EverytizePage12.png"),
        require("../../images/Everytize/EverytizePage13.png"),
      ],
    },
    {
      id: 8,
      name: "3DModel Viewer - CAD File Viewer",
      category: "opensource",
      badgeText: "Open Source",
      githubLink: "https://github.com/sulemansaeed73/NextJS-3DModelViewer",
      tags: [
        "Next.js",
        "Express",
        "Autodesk Forge API",
        "3D/2D CAD Engine",
        "Three.js",
      ],
      description:
        "A browser-based CAD file viewer powered by Next.js and the Autodesk Forge API. Enables engineers and architects to upload, inspect, rotate, and measure 2D and 3D AutoCAD drawings directly in the browser without plugins.",
      images: [
        require("../../images/AutoCadViewer/AutoCadViewerPage1.png"),
        require("../../images/AutoCadViewer/AutoCadViewerPage2.png"),
        require("../../images/AutoCadViewer/AutoCadViewerPage3.png"),
        require("../../images/AutoCadViewer/AutoCadViewerPage4.png"),
        require("../../images/AutoCadViewer/AutoCadViewerPage5.png"),
        require("../../images/AutoCadViewer/AutoCadViewerPage6.png"),
        require("../../images/AutoCadViewer/AutoCadViewerPage7.png"),
      ],
    },
    {
      id: 9,
      name: "Tenancy Deposit Refund - Property Management Tool",
      category: "client",
      badgeText: "Client Project",
      projectLink: "https://www.tenancydepositrefund.co.uk/",
      tags: [
        "React.js",
        "Express",
        "Node.js",
        "Property Management",
        "Legal Compliance",
      ],
      description:
        "Web application streamlining tenancy deposit management for UK landlords and tenants. Provides automated refund tracking, dispute resolution workflows, and legal compliance checks.",
      images: [
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage1.png"),
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage2.png"),
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage3.png"),
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage4.png"),
      ],
    },
    {
      id: 10,
      name: "CleanseText - Writing Assistance Platform",
      category: "opensource",
      badgeText: "Open Source",
      githubLink: "https://github.com/sulemansaeed73/huggingface-model/",
      tags: [
        "Next.js",
        "Django",
        "Python",
        "Hugging Face AI",
        "NLP Summarization",
      ],
      description:
        "AI writing assistance tool built with Next.js and Django. Integrates Hugging Face NLP models to perform real-time grammar checks, text summarization, paraphrasing, and document clarity scoring.",
      images: [
        require("../../images/CleanseText/Login.png"),
        require("../../images/CleanseText/Signup.png"),
        require("../../images/CleanseText/Profile.png"),
        require("../../images/CleanseText/Contact.png"),
        require("../../images/CleanseText/Dashboard.png"),
        require("../../images/CleanseText/HomePage.png"),
      ],
    },
  ];

  return (
    <div className="project-page-wrapper">
      {/* Hero Header Section */}
      <div className="project-hero-header">
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p className="project-subtext">
          Explore production client platforms, full-stack applications, and open-source contributions.
        </p>

        {/* Stats counter strip */}
        <div className="project-stats-strip">
          <div className="stat-item">
            <span className="stat-num">11+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">6+</span>
            <span className="stat-label">Live Client Apps</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Full Stack Production</span>
          </div>
        </div>
      </div>

      {/* Projects Listing Grid / Stack */}
      <div className="project-list-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card-modern ${
              index % 2 === 1 ? "reverse-layout" : ""
            }`}
          >
            {/* Left/Right: Browser Window Mockup Frame */}
            <div className="project-media-column">
              <div className="browser-mockup-frame">
                <div className="browser-header-bar">
                  <div className="browser-controls">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="browser-address-bar">
                    <span className="address-url">
                      {project.projectLink || project.githubLink || "https://localhost:3000"}
                    </span>
                  </div>
                </div>

                <div className="browser-content-area">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="custom-swiper"
                  >
                    {project.images.map((src, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="swiper-slide-container">
                          <img
                            src={src}
                            alt={`${project.name} slide ${idx + 1}`}
                            className="project-slide-image"
                          />
                          <button
                            className="image-expand-btn"
                            title="Expand preview"
                            onClick={() => setLightboxImage(src)}
                          >
                            <FiMaximize2 />
                          </button>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Right/Left: Project Details */}
            <div className="project-info-column">
              <div className="project-meta-top">
                <span className={`project-category-badge ${project.category}`}>
                  <FiCheckCircle className="badge-icon" /> {project.badgeText}
                </span>
              </div>

              <h2 className="project-title">{project.name}</h2>

              <p className="project-desc">{project.description}</p>

              {/* Tech Stack Pills */}
              <div className="tech-stack-container">
                <span className="tech-stack-label">Tech Stack:</span>
                <div className="tech-tag-list">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tech-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn btn-visit"
                  >
                    <FiExternalLink /> Visit Live Site
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn btn-github"
                  >
                    <FiGithub /> View Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Image Preview Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxImage(null)}
            >
              <FiX />
            </button>
            <img src={lightboxImage} alt="Project Screenshot Preview" />
          </div>
        </div>
      )}
    </div>
  );
}

