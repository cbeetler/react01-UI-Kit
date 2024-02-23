// packages
import "./index.css";
import { createRoot } from "react-dom/client";
import React from "react";
import clsx from "clsx";

// components
import Link from "./components/Link.jsx";
import Button from "./components/Button.jsx";
import Container from "./components/Container.jsx";
import Input from "./components/Input.jsx";

function App() {
  return (
    <>
      <Container>
        <Link href="https://react-tutorial.app">React Tutorial</Link>
        <Button disabled={true}>Login</Button>
        <Input placeholder="Full Name" name="full_name" />
      </Container>
    </>
  );
}

createRoot(document.querySelector("#react-root")).render(<App />);
