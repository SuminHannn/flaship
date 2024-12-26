import { Outlet } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ActiveMenuProvider } from "@/contexts/ActiveMenuContext";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <ActiveMenuProvider>
      <SidebarProvider>
        <AppSidebar />
        <Main>
          <Header />
          <Outlet />
        </Main>
      </SidebarProvider>
    </ActiveMenuProvider>
  );
}

export default AppLayout;
