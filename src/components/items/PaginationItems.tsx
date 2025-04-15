import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginationItemsProps } from '@/types/items';

const PaginationItems: React.FC<PaginationItemsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    const pageLimit = 2; 
  
    const startPage = Math.max(2, currentPage - pageLimit);
    const endPage = Math.min(totalPages - 1, currentPage + pageLimit);
  
    // صفحه 1
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          isActive={currentPage === 1}
          onClick={(e) => {
            e.preventDefault();
            onPageChange(1);
          }}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
  
    // نقطه‌چین قبل
    if (startPage > 2) {
      pages.push(<PaginationItem key="start-ellipsis">...</PaginationItem>);
    }
  
    // صفحات وسط
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  
    // نقطه‌چین بعد
    if (endPage < totalPages - 1) {
      pages.push(<PaginationItem key="end-ellipsis">...</PaginationItem>);
    }
  
    // صفحه آخر
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            isActive={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
  
    return pages;
  };

  return (
    <Pagination className="mt-4 mb-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationItems;
