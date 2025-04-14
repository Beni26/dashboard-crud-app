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
  onPageChange?: (page: number) => void;
}
export interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemId: number;
}
export interface TableContainerProps {
  onOpenChange: (open: boolean) => void;
}

export interface PaginationItemsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
