import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Main from "./components/layout/Main";

export default function Home() {
  const [scrollLocation, setScrollLocation] = useState(0);
  const updateScroll = () => {
    setScrollLocation(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <>
      <Header scrollLocation={scrollLocation} />
      <Main />
    </>
  );
}
