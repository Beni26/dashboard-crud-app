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
import { useEffect, useState } from 'react';
import { getAsyncItems } from '@/features/item/ItemSlice';
import TableData from './TableData';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import ItemDialog from './ItemDialog';
import { Plus } from 'lucide-react';

interface TableContainerProps {
  page: number;
  limit: number;
  setPage: (page: number) => void;
}

const TableContainer = ({ page, limit, setPage }: TableContainerProps) => {
  const { items, loading } = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch<AppDispatch>();
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(getAsyncItems({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <div>
      <div className="flex justify-end">
        <Button className='cursor-pointer' onClick={() => setDialogOpen(true)}>
          <Plus />
          Add new
        </Button>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-md mt-4">
        <Table>
          <TableCaption>A list of recent Items.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead >title</TableHead>
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
              <TableData items={items} limit={limit} page={page}/>
            )}
          </TableBody>
        </Table>
      </div>

      <ItemDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onPageChange={setPage}
      />
    </div>
  );
};

export default TableContainer;
