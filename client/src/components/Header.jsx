import { SidebarTrigger } from "@/components/ui/sidebar";
import { useActiveMenu } from "@/contexts/ActiveMenuContext";
import SearchBar from "./SearchBar";
import { Separator } from "@/components/ui/separator";

function Header() {
  const { activeMenu } = useActiveMenu();
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mx-3 h-4 bg-slate-300" />
        <span className="text-slate-700 text-sm">{activeMenu}</span>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
