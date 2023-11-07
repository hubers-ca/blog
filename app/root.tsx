import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { type ErrorBoundaryComponent } from "@remix-run/react/dist/routeModules";
import Error from "./components/error";
import Menus from "./components/menu";
import "./styles.css";

export const ErrorBoundary: ErrorBoundaryComponent = () => {
  // TODO repair this
  return (
    <Layout>
      <Error status={500} msg={"Something went wrong"} />
    </Layout>
  );
};

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        <Menus>{children}</Menus>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
