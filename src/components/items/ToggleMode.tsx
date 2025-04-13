import { Switch } from '@/components/ui/switch';
import { useTheme } from './theme-provider';
import { Moon, Sun } from 'lucide-react';

const ToggleMode = () => {
  const { setTheme, theme } = useTheme();

  const handleSwitchChange = (checked: boolean) => {
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  return (
    <div className="flex gap-1 items-center">
      <div className="flex">
        {theme === 'system' ? (
          <Sun className="w-3 h-3" />
        ) : (
          <Moon className="w-3 h-3" />
        )}
      </div>
      <Switch
        checked={theme === 'dark' ? true : false}
        onCheckedChange={handleSwitchChange}
        className="cursor-pointer"
      />
    </div>
  );
};
export default ToggleMode;
