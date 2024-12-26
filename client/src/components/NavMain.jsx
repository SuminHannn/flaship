import { NavLink } from "react-router";
import { useActiveMenu } from "@/contexts/ActiveMenuContext";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";

function NavMain({ items }) {
  const { setActiveMenu } = useActiveMenu();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index) => (
          <SidebarMenuItem key={index}>
            <NavLink to={item.path} onClick={() => setActiveMenu(item.title)}>
              <SidebarMenuButton tooltip={item.title} size="lg">
                <span className="text-[1.3rem] mx-1">
                  {item.icon && <item.icon />}
                </span>
                <span className="ml-1">{item.title}</span>
              </SidebarMenuButton>
            </NavLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default NavMain;
