import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="search" placeholder="Search" />
      <Button className="cursor-pointer">
        <SearchIcon /> Search
      </Button>
    </div>
  );
};
export default Search;
