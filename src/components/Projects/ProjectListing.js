import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function ProjectPage() {
  const projects = [
    {
      name: "RetrieveMyItem",
      shortDescription: "Private Project",
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
      name: "Everytize",
      shortDescription: "Private Project",
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
      name: "GetHardMoney",
      shortDescription: "Public Client Project",
      description:
        "GetHardMoney is a modern lending platform built with Next.js and NestJS, tailored for loan providers and seekers in the U.S. This project facilitates direct interaction between lenders and borrowers. Users can register as either party, and borrowers can submit loan requests visible to registered lenders. The platform includes an interactive U.S. map to view all participating lenders by region. With a comprehensive user dashboard, both parties can track and manage their loan-related activities seamlessly.",
       images: [
        require("../../images/GetHardMoney/GetHardMoneyPage1.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage2.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage3.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage4.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage5.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage6.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage7.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage8.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage9.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage10.png"),
        require("../../images/GetHardMoney/GetHardMoneyPage11.png"),
      ],
    },
    {
      name: "3DModel Viewer",
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
      name: "Tenancy Deposit Refund",
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
    // {
    //   name: "WritingChecker",
    //   shortDescription: "Private Project",
    //   description:
    //     "WritingChecker is a writing assistance platform built with Next.js and Django. This application enables users to upload text documents and receive grammar checks, paraphrasing suggestions, and clarity improvements. It supports account creation and login features for saving writing history and results. Designed with user privacy and performance in mind, WritingChecker is a helpful tool for students, writers, and professionals looking to polish their content.",
    //   images: ["/img/sample.png", "/img/sample.png", "/img/sample.png"],
    // },
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
