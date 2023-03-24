import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import DocslyClient from "./components/DocslyClient";

const config: DocsThemeConfig = {
  logo: <span>docsly</span>,
  footer: {
    text: "Docsly Nextra Template",
    component: () => (
      <>
        {/* Your footer code */}
        <DocslyClient />
      </>
    ),
  },
};

export default config;
