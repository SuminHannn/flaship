import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

function Logo({ company }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={company.name}>
          <span>{company.logo ? company.logo : "Logo"}</span>
          <span>{company.name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default Logo;
