import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input className="h-9" type="text" placeholder="Search..." />
      <Button type="submit" size="sm">
        <MdSearch size={70} />
      </Button>
    </div>
  );
}

export default SearchBar;
