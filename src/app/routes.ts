import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { BoardMembersPage } from "./pages/BoardMembersPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "events", Component: EventsPage },
      { path: "board-members", Component: BoardMembersPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);