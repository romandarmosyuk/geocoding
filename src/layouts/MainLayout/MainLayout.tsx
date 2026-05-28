import { Outlet } from "react-router";
import { Container } from "@mantine/core";
import { useState } from "react";
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer";

export const MainLayout = () => {
  const [count, setCount] = useState<number>(10);
  const [language, setLanguage] = useState("en");

  const context = {
    count,
    setCount,
    language,
    setLanguage,
  };

  return (
    <>
      <Header />
      <main>
        <Container size="md">
          <Outlet context={context} />
        </Container>
      </main>
      <Footer />
    </>
  );
};
