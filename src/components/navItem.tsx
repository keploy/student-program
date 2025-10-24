import { useDarkMode } from '@/components/utils/DarkModeContext'; // Import the dark mode context

interface NavItemProps {
  name: string;
}

export default function NavItem({ name }: NavItemProps) {
  const { darkMode } = useDarkMode(); // Access the dark mode state

  return (
    <div>
      <h1 className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-primary-300`}>
        {name}
      </h1>
    </div>
  );
}
