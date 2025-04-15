import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import Search from '@/components/items/Search';
import Sort from '@/components/items/Sort';
import TableContainer from '@/components/items/TableContainer';
import ToggleMode from '@/components/items/ToggleMode';
import PaginationItems from '@/components/items/PaginationItems';
import { getAsyncItems } from '@/features/item/ItemSlice';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { total } = useSelector((state: RootState) => state.items);

  const [page, setPage] = useState(1);
  const limit = 5;

  const [sortOption, setSortOption] = useState<{
    field: 'date' | 'price';
    order: 'asc' | 'desc';
  }>({
    field: 'date',
    order: 'desc',
  });
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(
      getAsyncItems({
        page,
        limit,
        sortBy: sortOption.field,
        orderBy: sortOption.order,
        category: categoryFilter || undefined,
      }),
    );
  }, [page, sortOption, dispatch,categoryFilter]);
  return (
    <div className="container xl:max-w-screen-xl mx-auto mt-10">
      <header className="flex justify-between mb-10">
        <Search />
        <ToggleMode />
      </header>

      <main className="space-y-10">
        <Sort
          sortOption={sortOption}
          setSortOption={setSortOption}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <TableContainer page={page} limit={limit} setPage={setPage} />
        <PaginationItems
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
};

export default Home;
