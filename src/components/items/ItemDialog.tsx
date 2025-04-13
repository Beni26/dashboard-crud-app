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

const ItemDialog: React.FC<ItemDialogProps> = ({
  open,
  onOpenChange,
  selectedItem,
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
      date: selectedItem?.date?.split('T')[0] || new Date().toISOString().split("T")[0], 
      price: selectedItem?.price, 
      description: selectedItem?.description || '', 
      stock: selectedItem?.stock,
      rating: selectedItem?.rating, 
    },
  });

  const onSubmit = (data: Item) => {
    const transformedData = {
      ...data,
      date: data.date ? new Date(data.date).toISOString() : '', 
    };
    console.log(transformedData);
  };
  useEffect(() => {
    if (!open) {
      reset(); // ریست کامل فرم و پاک کردن ارورها
    } else if (selectedItem) {
      const transformed = {
        ...selectedItem,
        date: selectedItem.date?.split('T')[0],
      };
      reset(transformed); // اگر در حالت ویرایش هستیم، مقادیر رو بذار
    } else {
      reset(); // اگر فرم برای افزودنه، مقادیر خالی بذار
    }
  }, [open, selectedItem, reset]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input {...register('title', { required: 'Title is required' })} />
            {errors.title && (
              <p className="text-red-500 text-xs ">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>category</Label>
            <Select
              defaultValue={selectedItem?.category || ''}
              {...register('category', { required: 'Category is required' })} // استفاده از register با required
              onValueChange={(value) => setValue('category', value)}
            >
              <SelectTrigger className="w-full">
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
            <Label>date</Label>
            <Input
              type="date"
              className="w-full inline"
              {...register('date', { required: 'Date is required' })}
            />
            {errors.date && (
              <p className="text-red-500 text-xs">{errors.date.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>price</Label>
            <Input
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
            <Label>description</Label>
            <Input
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
            <Label>stock</Label>
            <Input
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
            <Label>rating</Label>
            <Input
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
              {selectedItem ? 'Edit item' : ' Add item'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ItemDialog;
