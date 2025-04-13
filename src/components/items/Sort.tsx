import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const Sort = () => {
  const [sortBy, setSortBy] = useState<'start' | 'end'>('start');
  const [price, setPrice] = useState<'min' | 'max'>('min');

  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2 flex gap-4">
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground ">Date Range:</div>
          <div className="inline-flex rounded-md shadow-md" role="group">
            <Button
              variant={sortBy === 'start' ? 'default' : 'secondary'}
              className="rounded-r-none cursor-pointer"
              onClick={() => setSortBy('start')}
            >
              Start Date
            </Button>
            <Button
              variant={sortBy === 'end' ? 'default' : 'secondary'}
              className="rounded-l-none cursor-pointer"
              onClick={() => setSortBy('end')}
            >
              End Date
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground ">Price Range:</div>
          <div className="inline-flex rounded-md shadow-md" role="group">
            <Button
              variant={price === 'min' ? 'default' : 'secondary'}
              className="rounded-r-none cursor-pointer"
              onClick={() => setPrice('min')}
            >
              Min Price
            </Button>
            <Button
              variant={price === 'max' ? 'default' : 'secondary'}
              className="rounded-l-none cursor-pointer"
              onClick={() => setPrice('max')}
            >
              Max Price
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-sm text-muted-foreground "> Category:</div>

        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="est">All</SelectItem>
              <SelectItem value="cst">Electronics</SelectItem>
              <SelectItem value="mst">Sports</SelectItem>
              <SelectItem value="pst">Stationery</SelectItem>
              <SelectItem value="akst">Home & Kitchen</SelectItem>
              <SelectItem value="hst">Fashion</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default Sort;
