export interface Item {
  id?: number;
  title: string;
  category: string;
  date: string; 
  price: number;
  description: string;
  stock: number;
  rating: number;
}

export interface ItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedItem?: Item | null; 

}