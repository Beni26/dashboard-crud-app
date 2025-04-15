import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Item, ItemDialogProps } from '@/types/items';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAsyncItem, updateAsyncItem } from '@/features/item/ItemSlice';
import { AppDispatch } from '@/store/store';
import { DialogDescription } from '@radix-ui/react-dialog';

const ItemDialog: React.FC<ItemDialogProps> = ({
  open,
  onOpenChange,
  selectedItem,
  onPageChange,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Item>({
    defaultValues: {
      title: selectedItem?.title || '',
      category: selectedItem?.category || '',
      date:
        selectedItem?.date?.split('T')[0] ||
        new Date().toISOString().split('T')[0],
      price: selectedItem?.price,
      description: selectedItem?.description || '',
      stock: selectedItem?.stock,
      rating: selectedItem?.rating,
    },
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!open) {
      reset(); 
    } else if (selectedItem) {
      const transformed = {
        ...selectedItem,
        date: selectedItem.date?.split('T')[0],
      };
      reset(transformed); 
    } else {
      reset(); 
    }
  }, [open, selectedItem, reset]);

  const onSubmit = async (data: Item) => {
    const transformedData = {
      ...data,
      date: new Date(data.date).toISOString(),
    };
    if (selectedItem) {
      await dispatch(updateAsyncItem(transformedData));
      onOpenChange(false);
    } else {
      await dispatch(addAsyncItem(transformedData));
      onPageChange?.(1);
      onOpenChange(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[425px]"
        aria-describedby="item-dialog-description"
      >
        <DialogHeader>
          <DialogTitle>{selectedItem ? 'Edit item' : 'Add item'}</DialogTitle>
        </DialogHeader>
        <DialogDescription id="item-dialog-description">
          Fill out the form to {selectedItem ? 'edit' : 'add'} an item.
        </DialogDescription>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="title-input">title</Label>
            <Input
              id="title-input"
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && (
              <p className="text-red-500 text-xs">{errors.title.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="category-input">category</Label>
            <Select
              defaultValue={selectedItem?.category || ''}
              {...register('category', { required: 'Category is required' })}
              onValueChange={(value) => setValue('category', value)}
            >
              <SelectTrigger className="w-full" data-testid="category-input">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
                <SelectItem value="Stationery">Stationery</SelectItem>
                <SelectItem value="Furniture">Furniture</SelectItem>
                <SelectItem value="Home & Kitchen">Home & Kitchen</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-red-500 text-xs">{errors.category.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="date-input">date</Label>
            <Input
              id="date-input"
              type="date"
              className="w-full inline"
              {...register('date', { required: 'Date is required' })}
            />
            {errors.date && (
              <p className="text-red-500 text-xs">{errors.date.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="price-input">price</Label>
            <Input
              id="price-input"
              {...register('price', {
                required: 'Price is required',
                valueAsNumber: true,
              })}
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description-input">description</Label>
            <Input
              id="description-input"
              {...register('description', {
                required: 'Description is required',
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="stock-input">stock</Label>
            <Input
              id="stock-input"
              {...register('stock', {
                required: 'Stock is required',
                valueAsNumber: true,
              })}
            />
            {errors.stock && (
              <p className="text-red-500 text-xs">{errors.stock.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="rating-input">rating</Label>
            <Input
              id="rating-input"
              {...register('rating', {
                required: 'Rating is required',
                valueAsNumber: true,
              })}
            />
            {errors.rating && (
              <p className="text-red-500 text-xs">{errors.rating.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full cursor-pointer">
              {selectedItem ? 'Edit item' : 'Add item'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ItemDialog;
