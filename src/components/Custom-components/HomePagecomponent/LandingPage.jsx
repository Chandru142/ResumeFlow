import React, { useEffect, useState } from "react";

import {
  FileText, Download, Share2, Sparkles, Zap, Star, Github,
  ArrowRightCircle, Monitor, X, Layout,
  ChevronRight, Mail, Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, Link } from "react-router-dom";
import Lightfall from "@/components/Custom-components/Lightfall";

export default function LandingPage() {
  const [isMobile, setisMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setisMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".hero-enter").forEach((el) =>
        el.classList.add("animate")
      );
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div>
        {isMobile && (
          <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
            <div className="bg-card rounded-lg p-6 max-w-sm w-full border border-border shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-teal-500" />
                  <h3 className="font-semibold">Better Experience</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setisMobile(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                For the best resume building experience, please use Resumind on
                a desktop or PC.
              </p>
              <Button
                onClick={() => setisMobile(false)}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white"
              >
                Continue Anyway
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-background dark:via-background dark:to-card font-body">
        {/* ── Hero Section ── */}
        <section className="container mx-auto px-6 min-h-screen flex flex-col justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none bg-[#0b1120]">
            <Lightfall
              colors={['#45D2B0', '#5854EB', '#A6C8FF']}
              backgroundColor="#45D2B0"
              speed={0.3}
              streakCount={1}
              streakWidth={1}
              streakLength={1}
              glow={0.9}
              density={0.4}
              twinkle={0.5}
              zoom={2.5}
              backgroundGlow={0.2}
              opacity={0.55}
              mouseInteraction={true}
              mouseStrength={0.4}
              mouseRadius={0.8}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent dark:from-background dark:to-transparent z-[1] pointer-events-none" />

          <div className="relative z-10">
            <h1 className="hero-enter text-5xl md:text-6xl font-heading font-bold text-white/90 dark:text-foreground mb-6 leading-tight">
              Build Smarter Resumes with{" "}
              <span className="text-teal-400 dark:text-teal-500">Resumind</span>
            </h1>

            <p className="hero-enter hero-delay-1 text-lg md:text-xl text-white/70 dark:text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed">
              Smart suggestions. Beautiful templates. Instant PDFs. Zero hassle.
            </p>

            <div className="hero-enter hero-delay-2 flex justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 font-body"
              >
                Get Started <ArrowRightCircle className="ml-1" />
              </Button>
              <Link
                to="https://github.com/Kushalkush-dev/Resumind-Ai-based-Resume-Builder..git"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/30 backdrop-blur-sm border border-border/60 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer hover:scale-105 font-body"
                >
                  <Github /> Support with a Star{" "}
                  <Star className="fill-amber-400 text-orange-400" />
                </Button>
              </Link>
            </div>
          </div>
        </section>



        {/* ── Features Section ── */}
        <section className="container mx-auto px-6 py-16 dark:bg-card/30">
          <div data-reveal className="reveal">
            <h2 className="heading-accent text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
              Why Choose Resumind?
            </h2>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12 font-body">
              Everything you need to land your next opportunity, in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Full Customization",
                desc: "Tailor your resume layout, colors, and sections exactly how you want.",
              },
              {
                icon: Download,
                title: "Easy Download",
                desc: "Export your resume in high-quality PDF with a single click.",
              },
              {
                icon: Share2,
                title: "Instant Sharing",
                desc: "Share your resume link online with recruiters instantly.",
              },
              {
                icon: Sparkles,
                title: "AI Suggestions",
                desc: "Get personalized tips and AI-driven improvements for better impact.",
              },
            ].map((feature, i) => (
              <div data-reveal className={`reveal reveal-delay-${i + 1}`} key={i}>
                <Card className="card-accent group shadow-md rounded-2xl border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {feature.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="container mx-auto px-6 py-16">
          <div data-reveal className="reveal">
            <h2 className="heading-accent text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-14 font-body">
              Four simple steps to your next great resume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 md:gap-3 items-start max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Create Resume Based on Job",
                desc: "Choose the job role and Resumind suggests a tailored resume template.",
              },
              {
                icon: FileText,
                title: "Fill the Fields",
                desc: "Enter your details and experience to populate your resume effortlessly.",
              },
              {
                icon: Palette,
                title: "Customize It",
                desc: "Adjust layouts, colors, fonts, and sections to suit your style.",
              },
              {
                icon: Download,
                title: "Download or Share",
                desc: "Download your resume or share it instantly with recruiters.",
              },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div
                  data-reveal
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-center h-full">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base mb-2 text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex items-center justify-center pt-14">
                    <ChevronRight className="w-6 h-6 text-teal-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section data-reveal className="reveal relative overflow-hidden bg-gradient-to-b from-background to-card border-y border-border py-20 text-foreground text-center">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Start Building Your Resume Today
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-muted-foreground font-body text-lg">
              Save time and land your dream job faster with Resumind's AI-powered
              resume builder.
            </p>
            <Button
              onClick={() => navigate("/dashboard")}
              size="lg"
              className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-6 text-base font-body transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/30 hover:scale-105"
            >
              Get Started for Free
              <ArrowRightCircle className="ml-2" />
            </Button>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-card border-t border-border">
          <div className="container mx-auto px-6 py-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Brand */}
              <div>
                <img
                  src="/logo.svg"
                  alt="Resumind"
                  className="h-8 mb-4"
                />
                <p className="text-muted-foreground text-sm leading-relaxed font-body max-w-xs">
                  AI-powered resume builder that helps professionals create
                  standout resumes in minutes.
                </p>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                  Product
                </h4>
                <ul className="space-y-3">
                  {["Features", "Templates", "Pricing", "FAQ"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-muted-foreground text-sm font-body hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                  Resources
                </h4>
                <ul className="space-y-3">
                  {["Blog", "Help Center", "Community", "Status"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-muted-foreground text-sm font-body hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                        >
                          <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="https://github.com/Kushalkush-dev/Resumind-Ai-based-Resume-Builder..git"
                      target="_blank"
                      className="text-muted-foreground text-sm font-body hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@resumind.dev"
                      className="text-muted-foreground text-sm font-body hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      hello@resumind.dev
                    </a>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground font-body">
                    &copy; {new Date().getFullYear()} Resumind. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
