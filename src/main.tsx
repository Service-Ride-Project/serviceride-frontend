import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, ConfigProvider } from "antd";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import "./styles/global.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1166d8",
          colorInfo: "#1166d8",
          colorSuccess: "#1a9d77",
          colorWarning: "#dc8d29",
          colorText: "#18304b",
          colorTextSecondary: "#64748b",
          colorBgLayout: "#f5f7fb",
          borderRadius: 10,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
        components: {
          Card: { borderRadiusLG: 16 },
          Button: { controlHeight: 38 },
          Menu: { itemBorderRadius: 9, itemHeight: 42 },
        },
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  </StrictMode>,
);
