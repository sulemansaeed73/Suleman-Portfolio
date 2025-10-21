import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function ProjectPage() {
  const projects = [
    
     {
      name: "GetHardMoney - U.S. Lending Platform",
      shortDescription: "Client Project",
      projectLink: "https://gethardmoney.com/",
      description:
        "GetHardMoney is a U.S. lending platform built with Next.js, NestJS, and PostgreSQL. The platform supports lenders, borrowers, brokers, investors, and insurance providers. Borrowers and brokers can submit loan requests visible to lenders, while an interactive U.S. map helps users explore lenders by region. Investors can secure property insurance by submitting details once and receiving quotes from multiple providers. Key features include a comprehensive dashboard, real-time chat, and Stripe integration, ensuring seamless communication, payments, and activity management across all user types.",
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
      name: "InnerLight - Health & Wellness Platform",
      shortDescription: "Client Project",
      projectLink: "https://innerlightacademy.en/",
      description:
       "InnerLight is built with MERN Stack, featuring APIs for the Admin Panel and Mobile Application. The platform provides services such as training courses, meditation and breathwork sessions (recorded & live), private sessions (online & physical), retreats, and free webinars. The platform is designed for users, healers, instructors, and a web admin. Users can register and subscribe to their choice of courses, sessions, etc. For live offerings (courses, meditation, or breathwork), users receive a Zoom meeting link via WhatsApp to join the session.",
      images: [
        require("../../images/InnerLight/InnerLight (1).png"),
        require("../../images/InnerLight/InnerLight (2).png"),
        require("../../images/InnerLight/InnerLight (3).png"),
        require("../../images/InnerLight/InnerLight (4).png"),
      ],
    },
         {
      name: "TheCareMd - Telemedicine Platform",
      shortDescription: "Client Project",
      projectLink: "https://thecaremd.com/",
      description:
        "The CareMD is a telemedicine platform built with Next.js and Express, connecting patients with licensed U.S. healthcare providers for remote consultations. Patients can schedule appointments, receive online prescriptions, and access lab tests online, while providers can manage patient care efficiently through a centralized dashboard. The platform prioritizes affordability and security with LegitScript certification, ensuring the protection of patient data.",
      images: [
        require("../../images/CareMD/CareMD.png"),
        require("../../images/CareMD/CareMD (1).png"),
        require("../../images/CareMD/CareMD (2).png"),
        require("../../images/CareMD/CareMD (3).png"),
      ],
    },
         {
      name: "BlockWire - Press Release Distribution Platform",
      shortDescription: "Client Project",
      projectLink: "https://press.block-wire.com/",
      description:
        "BlockWire is a platform for creating and distributing press releases, built in React, Node.js, and PostgreSQL, with Firebase authentication for secure user access. Users can create, edit, and manage press releases, track submissions, and share content with a wider audience. The platform provides a clean, user-friendly interface for managing media content efficiently.",
      images: [
        require("../../images/BlockWire/BlockWire (1).png"),
        require("../../images/BlockWire/BlockWire (2).png"),
        require("../../images/BlockWire/BlockWire (3).png"),
        require("../../images/BlockWire/BlockWire (4).png"),
      ],
    },
    
    {
      name: "RetrieveMyItem - Lost and Found Platform",
      shortDescription: "Private",
       projectLink: "https://retrievemyitem.web.app/",
      description:
        "RetrieveMyItem is a lost-and-found platform built using ReactJS and Laravel (MySQL). This application connects people who have lost items with those who have found them. Both item owners and finders can register their items along with detailed descriptions and photos. A robust search system makes it easy to filter and locate listings. When someone attempts to claim an item, they must first pass a validation quiz to prove ownership. The platform also includes a real-time chat feature, allowing verified users to communicate securely during the item recovery process.",
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
      name: "I-Hostel - Hostel Management System",
      shortDescription: "Public (GitHub)",
      description:
        "I-Hostel is a hostel management system built using Laravel Framework with MySQL Database. This application connects hostel owners with potential tenants. Hostel owners can register their properties along with detailed descriptions and photos. A robust search system makes it easy to filter and locate listings. The platform also includes a real-time notification feature, allowing users to be immediately notified during process.",
      projectLink: "https://github.com/sulemansaeed73/I-Hostel-Management-System",
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
      name: "Everytize - Local Utility Directory",
      shortDescription: "Private",
      description:
        "Everytize is a local utility directory platform developed with the MERN stack (ReactJS, Tailwind CSS, Express, MongoDB). This website provides a convenient interface for users to discover essential local services such as restaurants, plumbers, electricians, and more. Each listing includes contact details, descriptions, and user-submitted reviews. It serves as a one-stop solution for finding trusted service providers within your area, while also giving businesses visibility in their local market.",
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
      name: "3DModel Viewer - CAD File Viewer",
      shortDescription: "Public (GitHub)",
      description:
        "3DModel Viewer is a web-based CAD file viewer developed using Next.js and Express, powered by the Autodesk Forge API. This application allows users to upload and visualize AutoCAD files in both 2D and 3D formats directly in the browser. Built for convenience and accessibility, users can manage their uploaded models and interact with them through rotation, zooming, and other navigation tools. It's an ideal tool for engineers, architects, or anyone needing quick, browser-based CAD file inspection.",
      projectLink: "https://github.com/sulemansaeed73/NextJS-3DModelViewer",
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
      name: "Tenancy Deposit Refund - Property Management Tool",
      shortDescription: "Client Project",
      description:
        "Tenancy Deposit Refund is a web application designed to streamline the process of managing tenancy deposits. Built with React.js and Express, this platform allows landlords and tenants to easily handle deposit refunds. Users can register, log in, and submit refund requests, which are then processed through a secure system. The application includes features for tracking the status of requests and ensuring compliance with tenancy laws, making it an essential tool for property management.",
      projectLink: "https://www.tenancydepositrefund.co.uk/",
      images: [
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage1.png"),
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage2.png"),
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage3.png"),
        require("../../images/TenancyDepositRefund/tenancydepositrefundPage4.png"),
      ],
    },
    {
      name: "CleanseText - Writing Assistance Platform",
      shortDescription: "Public (GitHub)",
      description:
        "CleanseText is a writing assistance platform built with Next.js and Django. This application enables users to upload text documents and receive grammar checks, summarization and paraphrasing suggestions. It supports account creation and login features. CleanseText is a helpful tool for students, writers, and professionals looking to polish their content.",
      projectLink: "https://github.com/sulemansaeed73/huggingface-model/",
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
    <div className="project-page">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-item ${index % 2 === 1 ? "reverse" : ""}`}
        >
          <div className="project-images">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="swiper-wrapper"
            >
              {project.images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Slide ${idx}`}
                    className="project-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="project-text">
            <h2>{project.name}</h2>
            <span className="short-description">
              {project.shortDescription}
            </span>
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Project
              </a>
            )}
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
