import Search from '@/components/items/Search';
import Sort from '@/components/items/Sort';
import TableContainer from '@/components/items/TableContainer';
import ToggleMode from '@/components/items/ToggleMode';

const Home = () => {
  return (
    <div className="container xl:max-w-screen-xl mx-auto mt-10 ">
      <header className="flex justify-between mb-10">
        <Search />
        <ToggleMode />
      </header>
      <main className="space-y-10">
        <Sort />
        <TableContainer />
      </main>
    </div>
  );
};
export default Home;
