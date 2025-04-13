import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { deleteAsyncItem } from '@/features/item/ItemSlice';
import { AppDispatch } from '@/store/store';
import { ConfirmDialogProps } from '@/types/items';
import { useDispatch } from 'react-redux';

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onOpenChange,
  itemId,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    await dispatch(deleteAsyncItem(itemId));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Item</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className='cursor-pointer' type="button" onClick={handleDelete}>
            Delete
          </Button>
          <Button className='cursor-pointer' type="button" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
