"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("vi");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "portfolio-language"
    ) as Language;
    if (savedLanguage && (savedLanguage === "vi" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const translations = {
      vi: {
        // Navigation
        "nav.home": "Trang chủ",
        "nav.about": "Giới thiệu",
        "nav.skills": "Kỹ năng",
        "nav.projects": "Dự án",
        "nav.contact": "Liên hệ",
        "nav.cv": "CV",

        // Hero Section
        "hero.title": "Developer",
        "hero.subtitle": "Full-Stack Developer & UI/UX Designer",
        "hero.description":
          "Tôi là một developer đam mê tạo ra những sản phẩm digital tuyệt vời. Chuyên về React, Next.js, Node.js và thiết kế UI/UX hiện đại.",
        "hero.viewProjects": "Xem Dự Án",
        "hero.downloadCV": "Tải CV",
        "hero.contact": "Liên Hệ",

        // About Section
        "about.title": "Về tôi",
        "about.subtitle":
          "Tôi là một developer đam mê công nghệ với kinh nghiệm trong việc phát triển các ứng dụng web và mobile hiện đại.",
        "about.journey": "Hành trình phát triển",
        "about.journeyText1":
          "Bắt đầu hành trình lập trình từ năm 2020, tôi đã không ngừng học hỏi và phát triển kỹ năng của mình. Từ những dòng code đầu tiên đến việc xây dựng các ứng dụng phức tạp, tôi luôn đặt chất lượng và trải nghiệm người dùng lên hàng đầu.",
        "about.journeyText2":
          "Với niềm đam mê về công nghệ và thiết kế, tôi không chỉ code mà còn quan tâm đến việc tạo ra những sản phẩm có ý nghĩa và tác động tích cực đến cuộc sống.",
        "about.interests": "Lĩnh vực chuyên môn",
        "about.experience": "Kinh nghiệm",
        "about.stats.projects": "Dự án hoàn thành",
        "about.stats.clients": "Khách hàng hài lòng",
        "about.stats.experience": "Năm kinh nghiệm",
        "about.stats.technologies": "Công nghệ sử dụng",
        "about.story": "Câu chuyện của tôi",
        "about.journeyText3":
          "Dẫn dắt team phát triển các dự án lớn, mentor junior developers",
        "about.journeyText4":
          "Phát triển ứng dụng web và mobile từ đầu đến cuối",
        "about.journeyText5":
          "Chuyên về React và thiết kế UI/UX cho các dự án khách hàng",
        "about.journeyText6":
          "Bắt đầu sự nghiệp với việc học và phát triển các dự án nhỏ",

        // Skills Section
        "skills.title": "Kỹ năng & Công nghệ",
        "skills.subtitle":
          "Tôi có kinh nghiệm với nhiều công nghệ và công cụ khác nhau, luôn cập nhật những xu hướng mới nhất trong ngành.",
        "skills.certifications": "Chứng chỉ & Bằng cấp",
        "skills.otherSkills": "Kỹ năng bổ sung",

        // Projects Section
        "projects.title": "Dự án của tôi",
        "projects.subtitle":
          "Khám phá các dự án tôi đã thực hiện, từ ứng dụng web đến mobile, mỗi dự án đều thể hiện kỹ năng và sự sáng tạo của tôi.",
        "projects.featured": "Dự án nổi bật",
        "projects.all": "Tất cả",
        "projects.frontend": "Frontend",
        "projects.backend": "Backend",
        "projects.fullstack": "Full-Stack",
        "projects.mobile": "Mobile",
        "projects.error": "Không thể tải dữ liệu dự án.",
        "projects.stats": "Thống kê dự án",
        "projects.totalProjects": "Tổng dự án",
        "projects.featuredProjects": "Dự án nổi bật",
        "projects.completedProjects": "Đã hoàn thành",
        "projects.totalTechnologies": "Công nghệ sử dụng",
        "projects.viewMore": "Xem thêm trên GitHub",
        "projects.highlights": "Điểm nổi bật",

        // Contact Section
        "contact.title": "Liên hệ với tôi",
        "contact.subtitle":
          "Có dự án thú vị? Hãy liên hệ với tôi để cùng nhau tạo ra những sản phẩm tuyệt vời!",
        "contact.info": "Thông tin liên hệ",
        "contact.infoText":
          "Tôi luôn sẵn sàng lắng nghe ý tưởng của bạn và cùng nhau phát triển những dự án đầy tiềm năng. Hãy để lại tin nhắn hoặc liên hệ trực tiếp!",
        "contact.email": "Email",
        "contact.phone": "Điện thoại",
        "contact.address": "Địa chỉ",
        "contact.follow": "Theo dõi tôi:",
        "contact.downloadCV": "Tải CV của tôi",
        "contact.downloadCVButton": "Tải CV",
        "contact.viewPDF": "Xem PDF",
        "contact.copyLink": "Copy Link",
        "contact.sendMessage": "Gửi tin nhắn",
        "contact.name": "Họ và tên",
        "contact.namePlaceholder": "Nguyễn Văn A",
        "contact.emailPlaceholder": "email@example.com",
        "contact.subject": "Chủ đề",
        "contact.subjectPlaceholder": "Chủ đề của bạn",
        "contact.message": "Tin nhắn",
        "contact.messagePlaceholder": "Nhập tin nhắn của bạn...",
        "contact.send": "Gửi tin nhắn",
        "contact.sending": "Đang gửi...",
        "contact.success": "Tin nhắn đã được gửi!",
        "contact.successText":
          "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong thời gian sớm nhất.",

        // Footer
        "footer.madeWith": "Made with",
        "footer.inVietnam": "in Vietnam",
        "footer.backToTop": "Back to top",
        "footer.quickLinks": "Liên kết nhanh",
        "footer.contact": "Liên hệ",

        // Common
        "common.required": "*",
        "common.loading": "Đang tải...",
        "common.error": "Có lỗi xảy ra",
        "common.success": "Thành công",
      },
      en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.cv": "CV",

        // Hero Section
        "hero.title": "Developer",
        "hero.subtitle": "Full-Stack Developer & UI/UX Designer",
        "hero.description":
          "I'm a passionate developer who loves creating amazing digital products. Specialized in React, Next.js, Node.js and modern UI/UX design.",
        "hero.viewProjects": "View Projects",
        "hero.downloadCV": "Download CV",
        "hero.contact": "Contact",

        // About Section
        "about.title": "About Me",
        "about.subtitle":
          "I'm a technology-enthusiast developer with experience in developing modern web and mobile applications.",
        "about.journey": "Development Journey",
        "about.journeyText1":
          "Starting my programming journey in 2020, I have continuously learned and developed my skills. From the first lines of code to building complex applications, I always prioritize quality and user experience.",
        "about.journeyText2":
          "With passion for technology and design, I not only code but also care about creating meaningful products that have a positive impact on life.",
        "about.interests": "Specialization",
        "about.experience": "Experience",
        "about.stats.projects": "Completed Projects",
        "about.stats.clients": "Satisfied Clients",
        "about.stats.experience": "Years Experience",
        "about.stats.technologies": "Technologies Used",
        "about.story": "My Story",
        "about.journeyText3":
          "Lead development of large projects, mentor junior developers",
        "about.journeyText4":
          "Develop web and mobile applications from start to finish",
        "about.journeyText5":
          "Specialized in React and UI/UX design for customer projects",
        "about.journeyText6":
          "Started my career by learning and developing small projects",

        // Skills Section
        "skills.title": "Skills & Technologies",
        "skills.subtitle":
          "I have experience with various technologies and tools, always keeping up with the latest trends in the industry.",
        "skills.certifications": "Certifications",
        "skills.otherSkills": "Other Skills",

        // Projects Section
        "projects.title": "My Projects",
        "projects.subtitle":
          "Explore the projects I've worked on, from web applications to mobile apps, each project showcases my skills and creativity.",
        "projects.featured": "Featured Projects",
        "projects.all": "All",
        "projects.frontend": "Frontend",
        "projects.backend": "Backend",
        "projects.fullstack": "Full-Stack",
        "projects.mobile": "Mobile",
        "projects.error": "Unable to load project data.",
        "projects.stats": "Project Statistics",
        "projects.totalProjects": "Total Projects",
        "projects.featuredProjects": "Featured Projects",
        "projects.completedProjects": "Completed Projects",
        "projects.totalTechnologies": "Total Technologies",
        "projects.viewMore": "View More on GitHub",
        "projects.highlights": "Highlights",
        // Contact Section
        "contact.title": "Contact",
        "contact.subtitle":
          "Have an interesting project? Let's get in touch to create amazing products together!",
        "contact.info": "Contact Information",
        "contact.infoText":
          "I'm always ready to listen to your ideas and work together to develop projects with great potential. Leave a message or contact me directly!",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.address": "Address",
        "contact.follow": "Follow me:",
        "contact.downloadCV": "Download my CV",
        "contact.downloadCVButton": "Download CV",
        "contact.viewPDF": "View PDF",
        "contact.copyLink": "Copy Link",
        "contact.sendMessage": "Send Message",
        "contact.name": "Full Name",
        "contact.namePlaceholder": "John Doe",
        "contact.emailPlaceholder": "email@example.com",
        "contact.subject": "Subject",
        "contact.subjectPlaceholder": "Your subject",
        "contact.message": "Message",
        "contact.messagePlaceholder": "Enter your message...",
        "contact.send": "Send Message",
        "contact.sending": "Sending...",
        "contact.success": "Message sent!",
        "contact.successText":
          "Thank you for contacting me. I will respond as soon as possible.",

        // Footer
        "footer.madeWith": "Made with",
        "footer.inVietnam": "in Vietnam",
        "footer.backToTop": "Back to top",
        "footer.quickLinks": "Quick Links",
        "footer.contact": "Contact",

        // Common
        "common.required": "*",
        "common.loading": "Loading...",
        "common.error": "An error occurred",
        "common.success": "Success",
      },
    };

    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
