import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search as SearchIcon, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '@/store/store';
import { getAsyncItems, searchAsyncItems } from '@/features/item/ItemSlice';

const Search = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const searchValue = watch('search', '');

  const dispatch = useDispatch<AppDispatch>();
  const limit = 5;
  const page = 1;

  const onSubmit = (data: any) => {
    if (data.search.trim() === '') {
      return;
    }
    dispatch(searchAsyncItems({ search: data.search, limit }));
    console.log(data.search);
  };
  const clearSearch = () => {
    reset({ search: '' });
    dispatch(getAsyncItems({ page, limit }));
  };
  return (
    <div className="lg:min-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full  items-center space-x-2 "
      >
        <div className="relative w-full">
          <Input {...register('search')} placeholder="Search..." />
          {searchValue && (
            <span
              className="absolute top-[10px] right-[13px] cursor-pointer"
              onClick={clearSearch}
            >
              <X size={18} />
            </span>
          )}
        </div>
        <Button
          className="cursor-pointer"
          type="submit"
          disabled={!searchValue}
        >
          <SearchIcon /> Search
        </Button>
      </form>
    </div>
  );
};
export default Search;
