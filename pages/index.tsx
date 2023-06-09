// import Header from "../components/Header/Header";
// import Startup from "../components/Header/StartupLogo/Startup";
// import MyName from "../components/Home/MyName/MyName";
// import { useContext, useEffect, useState, useRef } from "react";
// import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
// import AboutMe from "../components/Home/AboutMe/AboutMe";
// import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
// import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
// import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
// import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
// import Footer from "../components/Footer/Footer";
// import AppContext from "../components/AppContextFolder/AppContext";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Head from "next/head";
// export default function Home() {
//   const [ShowElement, setShowElement] = useState(false);
//   const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
//   const [ShowMe, setShowMe] = useState(false);
//   // context Variable to clearInterval
//   const context = useContext(AppContext);
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const homeRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // remove the interval Cookie timer setter when
//     clearInterval(context.sharedState.userdata.timerCookieRef.current);
//     if (typeof window !== "undefined") {
//       // remove UserDataPuller project EventListeners
//       window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
//       window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
//       // remove Typing project EventListeners
//       window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
//       document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
//     }
//     setTimeout(() => {
//       setShowElement(true);
//     }, 4500);

//     setTimeout(() => {
//       setShowThisCantBeReached(false);
//     }, 5400);
//     // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
//     setTimeout(() => {
//       setShowElement(false);
//       setShowMe(true);
//       context.sharedState.finishedLoading = true;
//       context.setSharedState(context.sharedState);
//     }, 10400);
//   }, [context, context.sharedState]);

//   useEffect(() => {
//     Aos.init({ duration: 2000, once: true });
//   }, []);

 

//   console.log("Portfolio Rendered...");
//   const meta = {
//     title: "Jerin Paul - Data Science  & Machine Learning Enthusiast",
//     description: `Currently a B-Tech Student at Government Engineering College Idukki, Kerala, India. I am a Data Science and Machine Learning Enthusiast.`,
//     image: "/titofCercle.png",
//     type: "website",
//   };
 
//   return (
//     <>
//       <Head>
//         <title>{meta.title}</title>
//         <meta name="robots" content="follow, index" />
//         <meta name="author" content={"Jerin Paul"}/>
//         <meta name="keywords" content="Jerin Paul, Government Engineering College Idukki, Portfolio, Frontend, Data Scientist, Data Science Kerala, .tech domain, B-Tech Student, jerinpaul.tech, IEEE CS Kerala Section Web master, Elevor task winner, GECI, GEC Idukki, Machine Learning Engineer, Data Analyst"/>
//         <meta content={meta.description} name="description" />
//         <meta property="og:url" content={`https://jerinpaul.tech`} />
//         <link rel="canonical" href={`https://jerinpaul.tech`} />
//         <meta property="og:type" content={meta.type} />
//         <meta property="og:site_name" content="Jerin Paul" />
//         <meta property="og:description" content={meta.description} />
//         <meta property="og:title" content={meta.title} />
//         <meta property="og:image" content={meta.image} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@jerry" />
//         <meta name="instagram:site" content="@j3rinpaul" />
//         <meta name="twitter:title" content={meta.title} />
//         <meta name="twitter:description" content={meta.description} />
//         <meta name="twitter:image" content={meta.image} />
//       </Head>
//       <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
//         {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
//         {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
//         <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
//         <MyName finishedLoading={context.sharedState.finishedLoading} />
//         <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
//         {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
//         {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
//         {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
//         {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
//         {context.sharedState.finishedLoading ? (
//           <Footer githubUrl={"https://github.com/j3rinpaul"} hideSocialsInDesktop={true} />
//         ) : (
//           <></>
//         )}
//       </div>
//     </>
//   );
// }


import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { NextSeo } from 'next-seo';
import Certificates from "../components/Home/Certificates/Certificates";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("Portfolio Rendered...");

  const title = "Jerin Paul - Data Science & Machine Learning Enthusiast";
  const description = "Currently a B-Tech Student at Government Engineering College Idukki, Kerala, India. I am a Data Science and Machine Learning Enthusiast.";
  const imageUrl = "/titofCercle.png";

  const SEO = {
    title,
    description,
    canonical: 'https://jerinpaul.tech',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://jerinpaul.tech',
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      handle: '@jerry',
      site: '@j3rinpaul',
      cardType: 'summary_large_image',
    },
  };

  return (
    <>
      <Head>
        <title>{SEO.title}</title>
      </Head>
      <NextSeo {...SEO} />
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full" role="main">
        {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
        {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
        {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
        {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
        {context.sharedState.finishedLoading ? <Certificates /> : <></>}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
        {context.sharedState.finishedLoading ? (
          <Footer githubUrl={"https://github.com/j3rinpaul"} hideSocialsInDesktop={true} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}


