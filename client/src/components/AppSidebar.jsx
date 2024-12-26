import NavMain from "./NavMain";
import Logo from "./Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  MdDashboard,
  MdCalendarMonth,
  MdSupervisorAccount,
  MdLibraryAddCheck,
  MdFlight,
} from "react-icons/md";
import { PiShippingContainerFill } from "react-icons/pi";
import { RiShipFill } from "react-icons/ri";

const data = {
  company: {
    name: "Flaship",
  },
  nav: [
    {
      title: "Dashboard",
      path: "/",
      icon: MdDashboard,
    },
    {
      title: "Schedule",
      path: "/schedule",
      icon: MdCalendarMonth,
    },
    {
      title: "Customer",
      path: "/customer",
      icon: MdSupervisorAccount,
    },
    {
      title: "Booking",
      path: "/booking",
      icon: MdLibraryAddCheck,
    },
    {
      title: "Container",
      path: "/container",
      icon: PiShippingContainerFill,
    },
    {
      title: "Carrier",
      path: "/carrier",
      icon: RiShipFill,
    },
    {
      title: "Air",
      path: "/air",
      icon: MdFlight,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo company={data.company} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.nav} />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
