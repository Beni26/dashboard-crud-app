import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store'; // فرض اینکه این فایل وجود داره
import { useEffect } from 'react';
import { getAsyncItems } from '@/features/item/ItemSlice';
import TableData from './TableData';
import { Skeleton } from '../ui/skeleton';

const TableContainer = () => {
  const { items, loading } = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAsyncItems());
  }, [dispatch]);

  return (
    <div className="border border-gray-200 rounded-lg shadow-md mt-4 ">
      <Table>
        <TableCaption>A list of recent Items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#Id</TableHead>
            <TableHead>title</TableHead>
            <TableHead>category</TableHead>
            <TableHead>date</TableHead>
            <TableHead>price</TableHead>
            <TableHead>description</TableHead>
            <TableHead>stock</TableHead>
            <TableHead>rating</TableHead>
            <TableHead>rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <>
              <TableRow>
                <TableCell colSpan={9}>
                  <Skeleton className="w-full h-[30px] bg-gray-100" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={9}>
                  <Skeleton className="w-full h-[30px] bg-gray-100" />
                </TableCell>
              </TableRow>
            </>
          ) : (
            <TableData items={items} />
          )}
        </TableBody>
      </Table>
    </div>
  );
};
export default TableContainer;
