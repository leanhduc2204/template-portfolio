"use client";

import { Code, Palette, Database, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t("about.stats.projects"), value: "50+" },
    { label: t("about.stats.clients"), value: "30+" },
    { label: t("about.stats.experience"), value: "3+" },
    { label: t("about.stats.technologies"), value: "15+" },
  ];

  const interests = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Design Systems",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold mb-4">
              {t("about.story")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.journeyText1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.journeyText2")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-background shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interests */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold mb-4">
              {t("about.interests")}
            </h3>
            <div className="grid gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <interest.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{interest.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold mb-8">
            {t("about.journey")}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    year: "2024",
                    title: "Senior Developer",
                    company: "Tech Company",
                    description:
                      "Dẫn dắt team phát triển các dự án lớn, mentor junior developers",
                  },
                  {
                    year: "2023",
                    title: "Full-Stack Developer",
                    company: "Startup XYZ",
                    description:
                      "Phát triển ứng dụng web và mobile từ đầu đến cuối",
                  },
                  {
                    year: "2022",
                    title: "Frontend Developer",
                    company: "Digital Agency",
                    description:
                      "Chuyên về React và thiết kế UI/UX cho các dự án khách hàng",
                  },
                  {
                    year: "2021",
                    title: "Junior Developer",
                    company: "First Company",
                    description:
                      "Bắt đầu sự nghiệp với việc học và phát triển các dự án nhỏ",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div className="p-6 rounded-2xl bg-background shadow-sm">
                        <div className="text-primary font-bold mb-2">
                          {item.year}
                        </div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <div className="text-primary mb-2">{item.company}</div>
                        <p className="text-muted-foreground text-sm">
                          {t(`about.journeyText${index + 3}`)}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-4 h-4 gradient-animated rounded-full border-4 border-background shadow-lg z-10 glow-effect"></div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
