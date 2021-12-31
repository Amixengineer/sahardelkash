import React from "react";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}