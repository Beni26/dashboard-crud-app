// import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { getAsyncItems } from '@/features/item/ItemSlice';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '@/store/store';
// const Sort = () => {
//   // const [sortByِDate, setSortByِDate] = useState<'asc' | 'desc'>('desc');
//   // const [sortByPrice, setSortByPrice] = useState<'asc' | 'desc'>('desc');
//   const [sortOption, setSortOption] = useState<{
//     field: 'date' | 'price';
//     order: 'asc' | 'desc';
//   }>({ field: 'date', order: 'desc' });

//   const dispatch = useDispatch<AppDispatch>();

//   useEffect(() => {
//     dispatch(
//       getAsyncItems({
//         page: 1,
//         limit: 10,
//         sortBy: sortOption.field,
//         orderBy: sortOption.order,
//       }),
//     );
//   }, [sortOption, dispatch]);
//   return (
//     <div className="flex justify-between items-center">
//       <div className="space-y-2 flex gap-4">
//         <div className="space-y-1">
//           <div className="text-sm text-muted-foreground ">Date Range:</div>
//           <div className="inline-flex rounded-md shadow-md" role="group">
//             <Button
//               variant={
//                 sortOption.field === 'date' && sortOption.order === 'asc'
//                   ? 'default'
//                   : 'secondary'
//               }
//               className="rounded-r-none cursor-pointer"
//               onClick={() => setSortOption({ field: 'date', order: 'asc' })}
//             >
//               Start Date
//             </Button>

//             <Button
//               variant={
//                 sortOption.field === 'date' && sortOption.order === 'desc'
//                   ? 'default'
//                   : 'secondary'
//               }
//               className="rounded-l-none cursor-pointer"
//               onClick={() => setSortOption({ field: 'date', order: 'desc' })}
//             >
//               End Date
//             </Button>
//           </div>
//         </div>
//         <div className="space-y-1">
//           <div className="text-sm text-muted-foreground ">Price Range:</div>
//           <div className="inline-flex rounded-md shadow-md" role="group">
//             <Button
//               variant={
//                 sortOption.field === 'price' && sortOption.order === 'asc'
//                   ? 'default'
//                   : 'secondary'
//               }
//               className="rounded-r-none cursor-pointer"
//               onClick={() => setSortOption({ field: 'price', order: 'asc' })}
//             >
//               Min Price
//             </Button>

//             <Button
//               variant={
//                 sortOption.field === 'price' && sortOption.order === 'desc'
//                   ? 'default'
//                   : 'secondary'
//               }
//               className="rounded-l-none cursor-pointer"
//               onClick={() => setSortOption({ field: 'price', order: 'desc' })}
//             >
//               Max Price
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="space-y-1">
//         <div className="text-sm text-muted-foreground ">Category:</div>

//         <Select>
//           <SelectTrigger className="w-[280px]">
//             <SelectValue placeholder="Select a Category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectItem value="est">All</SelectItem>
//               <SelectItem value="cst">Electronics</SelectItem>
//               <SelectItem value="mst">Sports</SelectItem>
//               <SelectItem value="pst">Stationery</SelectItem>
//               <SelectItem value="akst">Home & Kitchen</SelectItem>
//               <SelectItem value="hst">Fashion</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// };
// export default Sort;

interface SortProps {
  sortOption: {
    field: 'date' | 'price';
    order: 'asc' | 'desc';
  };
  setSortOption: React.Dispatch<
    React.SetStateAction<{
      field: 'date' | 'price';
      order: 'asc' | 'desc';
    }>
  >;
  categoryFilter: string | null;
  setCategoryFilter: (val: string | null) => void;
}

const Sort = ({ sortOption, setSortOption,setCategoryFilter }: SortProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2 flex gap-4">
        {/* date sort buttons */}
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Date Range:</div>
          <div className="inline-flex rounded-md shadow-md" role="group">
            <Button
              variant={
                sortOption.field === 'date' && sortOption.order === 'asc'
                  ? 'default'
                  : 'secondary'
              }
              className="rounded-r-none cursor-pointer"
              onClick={() => setSortOption({ field: 'date', order: 'asc' })}
            >
              Start Date
            </Button>
            <Button
              variant={
                sortOption.field === 'date' && sortOption.order === 'desc'
                  ? 'default'
                  : 'secondary'
              }
              className="rounded-l-none cursor-pointer"
              onClick={() => setSortOption({ field: 'date', order: 'desc' })}
            >
              End Date
            </Button>
          </div>
        </div>
        {/* price sort buttons */}
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Price Range:</div>
          <div className="inline-flex rounded-md shadow-md" role="group">
            <Button
              variant={
                sortOption.field === 'price' && sortOption.order === 'asc'
                  ? 'default'
                  : 'secondary'
              }
              className="rounded-r-none cursor-pointer"
              onClick={() => setSortOption({ field: 'price', order: 'asc' })}
            >
              Min Price
            </Button>
            <Button
              variant={
                sortOption.field === 'price' && sortOption.order === 'desc'
                  ? 'default'
                  : 'secondary'
              }
              className="rounded-l-none cursor-pointer"
              onClick={() => setSortOption({ field: 'price', order: 'desc' })}
            >
              Max Price
            </Button>
          </div>
        </div>
        ch
      </div>

      <div className="space-y-1">
        <div className="text-sm text-muted-foreground">Category:</div>
        <Select
          onValueChange={(val) => setCategoryFilter(val === 'all' ? null : val)}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Sports">Sports</SelectItem>
              <SelectItem value="Stationery">Stationery</SelectItem>
              <SelectItem value="Home & Kitchen">Home & Kitchen</SelectItem>
              <SelectItem value="Fashion">Fashion</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Sort;
