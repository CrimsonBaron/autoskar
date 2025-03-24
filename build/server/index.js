import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import React__default, { createElement, useState, createContext, useRef, useContext, useEffect } from "react";
import { Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { motion as motion$1, useInView } from "framer-motion";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function NavBar() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center md:px-15 py-5", children: [
    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold flex-1", children: "Autoskar" }),
    /* @__PURE__ */ jsxs("button", { className: "flex flex-row gap-2 btn-outline", onClick: scrollToContact, children: [
      /* @__PURE__ */ jsx(Phone, { width: 20, strokeWidth: 3 }),
      "Kontakt"
    ] })
  ] });
}
const logoLong = "/logo-full.svg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear"
};
const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1
  }
};
function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  radius = 5,
  transition,
  variants
}) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }
  if (Array.isArray(children)) {
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings");
    }
    children = children.join("");
  }
  const letters = children.split("");
  letters.push(" ");
  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition == null ? void 0 : transition.duration) ?? duration
  };
  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants == null ? void 0 : variants.container
  };
  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants == null ? void 0 : variants.item
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: cn("relative", className),
      style: {
        ...style
      },
      initial: "hidden",
      animate: "visible",
      variants: containerVariants,
      transition: finalTransition,
      children: [
        letters.map((letter, index) => /* @__PURE__ */ jsx(
          motion.span,
          {
            "aria-hidden": "true",
            variants: itemVariants,
            className: "absolute left-1/2 top-1/2 inline-block",
            style: {
              "--index": index,
              "--total": letters.length,
              "--radius": radius,
              transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
              transformOrigin: "center"
            },
            children: letter
          },
          `${index}-${letter}`
        )),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children })
      ]
    }
  );
}
const logoPigeonSoft = "/logo-pigeon-soft.svg";
function Footer() {
  return /* @__PURE__ */ jsx(
    motion$1.footer,
    {
      className: "bg-black bg-opacity-50 text-white rounded-3xl p-10 z-10 relative ",
      initial: {
        opacity: 0,
        y: 20
      },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }
      },
      viewport: { once: true },
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 md:mb-0", children: [
          /* @__PURE__ */ jsx("img", { src: logoLong, alt: "Logo Autoskar", className: "w-64" }),
          /* @__PURE__ */ jsxs("address", { className: "", children: [
            /* @__PURE__ */ jsx("div", { children: "Oskar Kišš" }),
            /* @__PURE__ */ jsx("div", { children: "Bydliště: Palackého 131, Dolní Bousov" }),
            /* @__PURE__ */ jsx("div", { children: "Provozovna: Palackého 131, Dolní Bousov" }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Tel. číslo: ",
              /* @__PURE__ */ jsx("a", { href: "tel:+420607528761", children: "+420 607 528 761" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Email: ",
              /* @__PURE__ */ jsx("a", { href: "mailto:Kiss.O@seznam.cz", children: "Kiss.O@seznam.cz" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "https://pigeoneer.dev", className: "relative w-64 h-64 rounded-full flex items-center justify-center", children: [
          /* @__PURE__ */ jsx(SpinningText, { children: "Made by - pigeoneer.dev" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: logoPigeonSoft,
              alt: "logo pigeon soft ",
              className: "w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
          )
        ] })
      ] })
    }
  );
}
function DefaultLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl relative mx-auto min-h-screen flex flex-col p-10", children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(NavBar, {}) }),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function LettersPullUp({
  text,
  className = ""
}) {
  const splittedText = text.split("");
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05
      }
    })
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: splittedText.map((current, i) => /* @__PURE__ */ jsx(
    motion$1.div,
    {
      ref,
      variants: pullupVariant,
      initial: "initial",
      animate: isInView ? "animate" : "",
      custom: i,
      children: current == " " ? /* @__PURE__ */ jsx("span", { children: " " }) : current
    },
    i
  )) });
}
function ContactSection() {
  const [isCallButtonHovered, setIsCallButtonHovered] = useState(false);
  const handleOpenEmail = () => {
    window.location.href = "mailto:kiss.o@seznam.cz";
  };
  const handleOpenCall = () => {
    window.location.href = "tel:+420607528761";
  };
  return /* @__PURE__ */ jsxs("section", { className: "md:p-10 py-6", "aria-label": "contact section", id: "contact-section", children: [
    /* @__PURE__ */ jsx(
      motion$1.h1,
      {
        className: "text-5xl font-medium leading-tight tracking-wide flex-1  text-center",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }
        },
        viewport: { once: true },
        children: "Kontakt"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex lg:flex-row flex-col gap-5 mt-10", children: [
      /* @__PURE__ */ jsx(
        motion$1.div,
        {
          className: "rounded-3xl flex-1 bg-white",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 2,
              ease: "easeOut"
            }
          },
          viewport: { once: true },
          children: /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.3092516649582!2d15.12666920807177!3d50.4394771039726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea95c74fb9165%3A0x8c291ac8c9cc7d7c!2sAutoservis%20Oskar%20Ki%C5%A1%C5%A1!5e0!3m2!1sen!2scz!4v1739808544255!5m2!1sen!2scz", width: "600", height: "450", className: "w-full rounded-3xl", loading: "eager" })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion$1.div,
        {
          className: "shadow-xl rounded-3xl lg:w-1/3 bg-black text-white p-10 flex flex-col relative overflow-hidden gap-4",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 3,
              ease: "easeOut"
            }
          },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-hidden ", children: /* @__PURE__ */ jsx("div", { className: "relative z-10 border-2 rounded-full w-35 h-35 bg-black bg-opacity-50 float-left", children: /* @__PURE__ */ jsx("img", { src: "/avatar.jpg", alt: "avatar", className: "rounded-full w-full h-full object-cover block" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "relative z-10 bg-opacity-50 rounded-md md:text-5xl text-4xl", children: "Oskar Kišš" }),
              /* @__PURE__ */ jsx("h2", { className: "relative z-10 b rounded-md text-xl", children: "+420 607 528 761" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "relative z-10 btn-white-outline ",
                onClick: () => {
                  setIsCallButtonHovered(true);
                  handleOpenCall();
                },
                children: /* @__PURE__ */ jsx(LettersPullUp, { text: "Volejte Hned" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-3xl flex-1 flex flex-col items-start justify-end", children: [
                /* @__PURE__ */ jsx("h3", { className: "relative flex-1", children: "Nebo preferujete email?" }),
                /* @__PURE__ */ jsx("h6", { className: "text-sm text-white/80", children: "kiss.o@seznam.cz" })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "relative  z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",
                  onClick: handleOpenEmail,
                  children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-6 w-6 text-gray-500" })
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
function PricingSection() {
  const serviceCategories = [
    {
      title: "Diagnostika a kontroly",
      services: [
        { name: "Základní diagnostika vozidla", price: "600 Kč" },
        { name: "Kontrola klimatizace a doplnění oleje", price: "900 Kč" },
        { name: "Měření osciloskopem", price: "1500 Kč" }
      ]
    },
    {
      title: "Údržba a opravy",
      services: [
        { name: "Leštění světlometů a zadních světel", price: "500 Kč" },
        { name: "Výměna pneumatik (stejný ráfek, za kolo)", price: "250 Kč" },
        { name: "Doplnění chladiva (za gram)", price: "2 Kč" },
        { name: "Montáž tažného zařízení", price: "2000-2500 Kč" },
        { name: "Hodinová sazba práce", price: "600 Kč" }
      ]
    },
    {
      title: "Prohlídky a čištění",
      services: [
        { name: "Čištění vozidla ozónovým generátorem", price: "500 Kč" },
        { name: "Příprava a provedení STK a emisí", price: "1500 Kč" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "md:p-10 py-6", "aria-label": "pricing section", children: [
    /* @__PURE__ */ jsx(
      motion$1.h1,
      {
        className: "text-5xl font-medium leading-tight tracking-wide flex-1 mb-10 text-center",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }
        },
        viewport: { once: true },
        children: "Ceník"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto md:px-0", children: [
      serviceCategories.map((category, index) => /* @__PURE__ */ jsxs(
        motion$1.div,
        {
          className: "bg-white rounded-3xl shadow p-10  mb-5",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * index,
              ease: "easeOut"
            }
          },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-medium mb-5", children: category.title }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: category.services.map((service, i) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "flex flex-col md:flex-row items-start md:items-center justify-between",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-1 md:ml-2 mb-1 md:mb-0", children: service.name }),
                  /* @__PURE__ */ jsx("div", { className: "font-semibold", children: service.price })
                ]
              },
              i
            )) })
          ]
        },
        index
      )),
      /* @__PURE__ */ jsxs(
        motion$1.p,
        {
          className: "mt-6 text-sm text-gray-600",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 3,
              ease: "easeOut"
            }
          },
          viewport: { once: true },
          children: [
            "* Uvedené ceny jsou pouze orientační. Konečná cena se může lišit v závislosti na specifických potřebách Vašeho vozu. Pro přesnou cenovou nabídku nás neváhejte ",
            /* @__PURE__ */ jsx("span", { className: "font-bold underline cursor-pointer", children: "kontaktovat" }),
            "."
          ]
        }
      )
    ] })
  ] });
}
function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical
        },
        className
      ),
      children: Array(repeat).fill(0).map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical && !reverse,
            "animate-marquee-reverse flex-row": !vertical && reverse,
            "animate-marquee-vertical flex-col": vertical && !reverse,
            "animate-marquee-vertical-reverse flex-col": vertical && reverse,
            "group-hover:[animation-play-state:paused]": pauseOnHover
          }),
          children
        },
        i
      ))
    }
  );
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-gray-700/20 animate-pulse", className),
      ...props
    }
  );
}
const images = [
  "/images/img_shop_01.jpg",
  "/images/img_shop_02.jpg",
  "/images/img_shop_03.jpg",
  "/images/img_shop_04.jpg",
  "/images/img_shop_05.jpg"
];
function GallerySection() {
  return /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-screen", children: /* @__PURE__ */ jsxs("section", { className: "md:p-10 py-6 ", "aria-label": "gallery section", children: [
    /* @__PURE__ */ jsx(
      motion$1.h1,
      {
        className: "text-5xl font-medium leading-tight tracking-wide flex-1  text-center mb-10",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }
        },
        viewport: { once: true },
        children: "Nahlédněte do naší dílny"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative flex w-full flex-col items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(Marquee, { pauseOnHover: true, className: "[--duration:20s]", children: images.map((image, index) => image ? /* @__PURE__ */ jsx(
        motion$1.img,
        {
          src: image,
          alt: `${image}-${index}.png`,
          className: "h-96 rounded-3xl",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * index,
              ease: "easeOut"
            }
          },
          viewport: { once: true }
        },
        index
      ) : /* @__PURE__ */ jsx(
        motion$1.div,
        {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * index,
              ease: "easeOut"
            }
          },
          viewport: { once: true },
          children: /* @__PURE__ */ jsx(Skeleton, { className: "w-96 h-96 rounded-3xl" }, index)
        }
      )) }),
      /* @__PURE__ */ jsx(Marquee, { reverse: true, pauseOnHover: true, className: "[--duration:20s]", children: images.map((image, index) => image ? /* @__PURE__ */ jsx(
        motion$1.img,
        {
          src: image,
          alt: `${image}-${index}.png`,
          className: "h-96 rounded-3xl",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * index,
              ease: "easeOut"
            }
          },
          viewport: { once: true }
        },
        index
      ) : /* @__PURE__ */ jsx(
        motion$1.div,
        {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * index,
              ease: "easeOut"
            }
          },
          viewport: { once: true },
          children: /* @__PURE__ */ jsx(Skeleton, { className: "w-96 h-96 rounded-3xl" }, index)
        }
      )) }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-1/7 bg-gradient-to-r from-[#ebe6e8]" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-1/7 bg-gradient-to-l from-[#ebe6e8]" })
    ] })
  ] }) });
}
const CarouselContext = createContext({
  onCardClose: () => {
  },
  currentIndex: 0
});
const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = React__default.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React__default.useState(false);
  const [canScrollRight, setCanScrollRight] = React__default.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);
  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft: scrollLeft2, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft2 > 0);
      setCanScrollRight(scrollLeft2 < scrollWidth - clientWidth);
    }
  };
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: { onCardClose: (index) => setCurrentIndex(index), currentIndex },
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-10 scroll-smooth [scrollbar-width:none]",
            ref: carouselRef,
            onScroll: checkScrollability,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "flex flex-row justify-start gap-4 pl-4",
                    "max-w-7xl mx-auto"
                    // remove max-w-4xl if you want the carousel to span the full width of its container
                  ),
                  children: items.map((item, index) => /* @__PURE__ */ jsx(
                    motion$1.div,
                    {
                      initial: {
                        opacity: 0,
                        y: 20
                      },
                      whileInView: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.2 * index,
                          ease: "easeOut",
                          once: true
                        }
                      },
                      viewport: { once: true },
                      className: "last:pr-[5%] md:last:pr-[33%]  rounded-3xl",
                      children: item
                    },
                    "card" + index
                  ))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-start gap-2 mr-10", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "relative z-40 h-15 w-15 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",
              onClick: scrollLeft,
              disabled: !canScrollLeft,
              children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-6 w-6 text-gray-500" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "relative z-40 h-15 w-15 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",
              onClick: scrollRight,
              disabled: !canScrollRight,
              children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-6 w-6 text-gray-500" })
            }
          )
        ] })
      ] })
    }
  );
};
const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    motion$1.div,
    {
      layoutId: layout ? `card-${card.title}` : void 0,
      onClick: handleOpen,
      className: "rounded-3x w-56 md:w-64 overflow-hidden flex flex-col items-center justify-center relative z-1",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: card.src,
            alt: card.title,
            className: "w-56 h-56 object-cover rounded-3xl"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-500", children: card.title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: card.description })
        ] })
      ]
    }
  ) });
};
const alternatorRepair = "/images/services/alternator_repair.jpg";
const autoAlarm = "/images/services/autoalarm_repair.jpg";
const batery = "/images/services/baterysystem_repair.jpg";
const breakRepair = "/images/services/breaksystem_repair.jpg";
const exhaustSystem = "/images/services/exhaustsystem_repair.jpg";
const interiorCleaning = "/images/services/interiorcleaning_repair.jpg";
const parkingRepair = "/images/services/parking_repair.jpg";
const underCarage = "/images/services/undercaragesystem_repair.jpg";
const windsheildRepair = "/images/services/windshield_repair.jpg";
const airConditiongRepair = "/images/services/airconditioning_repair.jpg";
const data = [
  {
    description: "Kompletní servis klimatizačních systémů, dezinfekce.",
    title: "Opravy klimatizace",
    src: airConditiongRepair
  },
  {
    description: "Výměna a oprava brzdových komponentů, ABS",
    title: "Brzdový servis",
    src: breakRepair
  },
  {
    description: "Výměna a opravy výfuků, svařování.",
    title: "Výfukové systémy",
    src: exhaustSystem
  },
  {
    description: "Opravy a výměny podvozkových dílů, geometrie kol.",
    title: "Podvozek",
    src: underCarage
  },
  {
    description: "Prodej, výměna, testování a dobíjení baterií.",
    title: "Autobaterie",
    src: batery
  },
  {
    description: "Opravy a repase startérů a alternátorů.",
    title: "Startéry a alternátory",
    src: alternatorRepair
  },
  {
    description: "Výměna a oprava autoskel",
    title: "Autosklo",
    src: windsheildRepair
  },
  {
    description: "Montáž parkovacích systémů.",
    title: "Parkovací senzory/kamery",
    src: parkingRepair
  },
  {
    description: "Montáž zabezpečovacích systémů.",
    title: "Autoalarmy",
    src: autoAlarm
  },
  {
    description: "Hloubkové čištění interiéru vozidla.",
    title: "Čištění interiéru",
    src: interiorCleaning
  }
];
function OtherSevicesSection() {
  const cards = data.map((card, index) => /* @__PURE__ */ jsx(Card, { card, index }, card.src));
  return /* @__PURE__ */ jsxs("section", { className: "md:p-10 py-6", "aria-label": "other sevices", children: [
    /* @__PURE__ */ jsx(
      motion$1.h1,
      {
        className: "text-5xl font-medium leading-tight tracking-wide flex-1  text-center",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }
        },
        viewport: { once: true },
        children: "A to není vše!"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "md:p-5", children: /* @__PURE__ */ jsx(Carousel, { items: cards }) })
  ] });
}
function AboutUsSection() {
  return /* @__PURE__ */ jsx("section", { className: "md:p-20 w-full flex flex-col justify-center items-center", "aria-label": "about-us", children: /* @__PURE__ */ jsxs(
    motion$1.div,
    {
      className: "md:p-10 p-4 text-center md:w-xl  flex flex-col gap-2 text-black/60 border border-black/20 rounded-3xl",
      initial: {
        opacity: 0,
        y: 20
      },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }
      },
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl ", children: "O nás" }),
        /* @__PURE__ */ jsx("p", { children: "Už od roku 2007 poskytuji komplexní služby v oblasti autoservisu a pneuservisu. Specializuji se na širokou škálu úkonů, od autodiagnostiky a odhalování závad pomocí moderních technologií, jako je osciloskop, až po čištění DPF a kontrolu stavu vozidel s DPF a SCR (Eolys, AdBlue)." }),
        /* @__PURE__ */ jsx("p", { children: "Jako zkušený automechanik a majitel servisu, se osobně starám o opravy alternátorů, startérů a provádím veškeré standardní automechanické (servisní prohlídky) a karosářské práce (včetně oprav po nehodách)." }),
        /* @__PURE__ */ jsx("p", { children: "Díky kompletně nově vybavené dílně a dlouholetým zkušenostem v oboru jsem zárukou kvalitních služeb a úspěšného vyřešení jakéhokoli problému s vaším vozidlem." })
      ]
    }
  ) });
}
const diagnostics = "/images/autodiagnostika.jpg";
const carRepair = "/images/autoservis.jpg";
const pneuservis = "/images/pneuservis.jpg";
function MainServicesSection() {
  return /* @__PURE__ */ jsxs("section", { className: "md:p-15 py-6 flex flex-col justify-center mx-auto md:h-[42rem] h-[96rem]", "aria-label": "main services", children: [
    /* @__PURE__ */ jsx(
      motion$1.h1,
      {
        className: "text-5xl font-medium leading-tight tracking-wide flex-1 text-center",
        initial: {
          opacity: 0,
          y: 20
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2 * 2,
            ease: "easeOut",
            once: true
          }
        },
        children: "Kompletní péče o Váš vůz"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-col md:flex-row gap-6 pt-10 h-full ", children: [
      /* @__PURE__ */ jsxs(
        motion$1.div,
        {
          className: "flex-1 md:h-full bg-gray-800 text-white rounded-3xl relative rounded-t-xl h-full",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 3,
              ease: "easeOut",
              once: true
            }
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "z-10 relative w-full md:h-full flex flex-col justify-end rounded-3xl h-full", children: [
              " ",
              /* @__PURE__ */ jsxs("div", { className: "h-1/3 w-full p-6 rounded-3xl bg-gradient-to-b from-transparent to-black flex flex-col justify-end", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-bold text-3xl ", children: "Autoservis" }),
                /* @__PURE__ */ jsx("div", { children: "Kvalitní servis a údržba vozidel. Vaše auto v rukou odborníků." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("img", { src: carRepair, alt: "car repair", className: "w-full h-full object-cover absolute top-0 left-0 rounded-3xl" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion$1.div,
        {
          className: "flex-1 md:h-full bg-gray-800 text-white rounded-3xl relative rounded-t-xl h-full",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 4,
              ease: "easeOut",
              once: true
            }
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "z-10 relative w-full md:h-full flex flex-col justify-end rounded-3xl h-full", children: [
              " ",
              /* @__PURE__ */ jsxs("div", { className: "h-1/3 w-full p-6 rounded-3xl bg-gradient-to-b from-transparent to-black flex flex-col justify-end", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-bold text-3xl ", children: "Diagnostika" }),
                /* @__PURE__ */ jsx("div", { children: "Odborné diagnostické služby. Efektivní řešení pro automobilové problémy." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("img", { src: diagnostics, alt: "car repair", className: "w-full h-full object-cover absolute top-0 left-0 rounded-3xl" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion$1.div,
        {
          className: "flex-1 md:h-full bg-gray-800 text-white rounded-3xl relative rounded-t-xl h-full",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 5,
              ease: "easeOut",
              once: true
            }
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "z-10 relative w-full md:h-full flex flex-col justify-end rounded-3xl h-full", children: [
              " ",
              /* @__PURE__ */ jsxs("div", { className: "h-1/3 w-full p-6 rounded-3xl bg-gradient-to-b from-transparent to-black flex flex-col justify-end", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-bold text-3xl ", children: "Pneuservis" }),
                /* @__PURE__ */ jsx("div", { children: "Kompletní péče o pneumatiky: Prodej, montáž, opravy a údržba." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("img", { src: pneuservis, alt: "car repair", className: "w-full h-full object-cover absolute top-0 left-0 rounded-3xl" })
          ]
        }
      )
    ] })
  ] });
}
function HeroSection() {
  return /* @__PURE__ */ jsxs(
    motion$1.section,
    {
      className: "flex sm:flex-row flex-col md:p-15",
      "aria-label": "hero section",
      children: [
        /* @__PURE__ */ jsxs(
          motion$1.div,
          {
            className: "flex-1",
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
                once: true
              }
            },
            children: [
              /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl", children: [
                "Vaše auto, naše priorita, ",
                /* @__PURE__ */ jsx("br", {}),
                "spolehlivost a péče na prvním místě."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 mb-4 text-lg text-gray-600", children: "jen u Autoskar" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion$1.div,
          {
            className: "flex-1 flex justify-center rounded-3xl h-80 items-center",
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
                once: true
              }
            },
            children: /* @__PURE__ */ jsx("img", { src: "/hero.png", alt: "hero image", className: "rounded-3xl h-full w-full object-cover block" })
          }
        )
      ]
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxs(DefaultLayout, { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(MainServicesSection, {}),
    /* @__PURE__ */ jsx(AboutUsSection, {}),
    /* @__PURE__ */ jsx(OtherSevicesSection, {}),
    /* @__PURE__ */ jsx(GallerySection, {}),
    /* @__PURE__ */ jsx("div", { className: "h-[60rem]" }),
    /* @__PURE__ */ jsx(PricingSection, {}),
    /* @__PURE__ */ jsx(ContactSection, {})
  ] });
}
function meta({}) {
  return [{
    title: "Autoskar"
  }, {
    name: "description",
    content: "Autoservis, pneuservis, diagnostika"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(HomePage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DQfTtMfV.js", "imports": ["/assets/chunk-IR6S3I6Y-OU4TeMAs.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BhoS9FI2.js", "imports": ["/assets/chunk-IR6S3I6Y-OU4TeMAs.js", "/assets/with-props-BJmDBsmp.js"], "css": ["/assets/root-DZiAe9kc.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-DJXXJEqQ.js", "imports": ["/assets/with-props-BJmDBsmp.js", "/assets/chunk-IR6S3I6Y-OU4TeMAs.js"], "css": [] } }, "url": "/assets/manifest-454dcca3.js", "version": "454dcca3" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
