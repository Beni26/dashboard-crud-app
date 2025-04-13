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
import { useForm } from "react-hook-form";

const ItemDialog: React.FC<ItemDialogProps> = ({open,onOpenChange,selectedItem}) => {
  //  const {regi}=useForm<Item>
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <form className="space-y-2">
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>category</Label>
            <Select defaultValue={selectedItem?.category || ""}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
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
          </div>
          <div className="flex flex-col gap-2">
            <Label>dae</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>price</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>description</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>stock</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>rating</Label>
            <Input />
          </div>
        </form>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ItemDialog;
