import { TableCell, TableRow } from '@/components/ui/table';
import { Item } from '@/types/items';
import truncateText from '@/utils/truncateText';
import { Button } from '../ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import ItemDialog from './ItemDialog';
import { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

interface Props {
  items: Item[];
}

const TableData: React.FC<Props> = ({ items }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfirm, setDialogConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleEdit = (item: Item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleDelete = (item: Item) => {
    setSelectedItem(item);
    setDialogConfirm(true);
  };

  return (
    <>
      {items.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.category}</TableCell>
          <TableCell>{item.date.split('T')[0]}</TableCell>
          <TableCell>{item.price} $</TableCell>
          <TableCell title={item.description}>
            {truncateText('A smooth and responsive wireless mouse.', 15)}
          </TableCell>
          <TableCell>{item.stock}</TableCell>
          <TableCell>{item.rating}</TableCell>
          <TableCell>
            <div className="flex gap-4">
              <Button
                className="cursor-pointer"
                onClick={() => handleEdit(item)}
              >
                <Pencil />
              </Button>
              <Button
                className="cursor-pointer"
                onClick={() => handleDelete(item)}
              >
                <Trash2 />
              </Button>
            </div>
          </TableCell>
        </TableRow>
      ))}
      <ItemDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedItem={selectedItem}
      />
      <ConfirmDialog
        open={dialogConfirm}
        onOpenChange={setDialogConfirm}
        itemId={selectedItem?.id ?? -1}
      />
    </>
  );
};

export default TableData;
