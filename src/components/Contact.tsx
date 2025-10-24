"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Download,
  FileText,
} from "lucide-react";
import { downloadCV, downloadCVAsPDF, copyCVLink } from "@/lib/cv";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cvMessage, setCvMessage] = useState("");

  const handleDownloadCV = () => {
    const result = downloadCV();
    setCvMessage(result.message);
    setTimeout(() => setCvMessage(""), 3000);
  };

  const handleDownloadPDF = () => {
    const result = downloadCVAsPDF();
    setCvMessage(result.message);
    setTimeout(() => setCvMessage(""), 3000);
  };

  const handleCopyLink = () => {
    const result = copyCVLink();
    setCvMessage(result.message);
    setTimeout(() => setCvMessage(""), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+84 123 456 789",
      href: "tel:+84123456789",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      value: "Hồ Chí Minh, Việt Nam",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">
                {t("contact.info")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("contact.infoText")}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">{t("contact.follow")}</h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com",
                    color: "hover:bg-gray-900 hover:text-white",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com",
                    color: "hover:bg-blue-600 hover:text-white",
                  },
                  {
                    name: "Twitter",
                    href: "https://twitter.com",
                    color: "hover:bg-blue-400 hover:text-white",
                  },
                  {
                    name: "Instagram",
                    href: "https://instagram.com",
                    color: "hover:bg-pink-500 hover:text-white",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-muted text-muted-foreground transition-all duration-200 ${social.color}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CV Download Section */}
          <div className="mt-8">
            <h4 className="font-semibold mb-4">{t("contact.downloadCV")}</h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-4 py-2 gradient-animated text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-200 glow-effect"
              >
                <Download className="w-4 h-4" />
                {t("contact.downloadCVButton")}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-4 py-2 glass-effect border border-border text-foreground rounded-xl font-semibold hover:bg-accent transition-all duration-200 hover:scale-105"
              >
                <FileText className="w-4 h-4" />
                {t("contact.viewPDF")}
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 glass-effect border border-border text-foreground rounded-xl font-semibold hover:bg-accent transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                {t("contact.copyLink")}
              </button>
            </div>
            {cvMessage && (
              <div className="mt-3 p-3 rounded-xl bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm">
                {cvMessage}
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl glass-effect shadow-sm border border-border">
            <h3 className="font-heading text-2xl font-bold mb-6">
              {t("contact.sendMessage")}
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="font-heading text-xl font-bold mb-2">
                  {t("contact.success")}
                </h4>
                <p className="text-muted-foreground">
                  {t("contact.successText")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                    >
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                      placeholder={t("contact.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                      placeholder={t("contact.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                  >
                    {t("contact.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    placeholder={t("contact.subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    {t("contact.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 gradient-animated text-primary-foreground rounded-xl font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 glow-effect"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>{t("contact.sending")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("contact.send")}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
