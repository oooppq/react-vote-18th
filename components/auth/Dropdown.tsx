import { useEffect, useRef, useState } from 'react';

interface DropDownProps {
  options: string[];
  title: string;
}

const DropDown = ({ options, title }: DropDownProps) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const useDetectOutside = (
    elem: React.RefObject<HTMLButtonElement>,
    initialState: boolean
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (elem.current !== null && !elem.current.contains(e.target as Node)) {
          setIsOpen((state) => !state);
        }
      };

      if (isOpen) {
        window.addEventListener('click', handleClickOutside);
      }

      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen, elem]);

    return { isOpen, setIsOpen };
  };

  const { isOpen, setIsOpen } = useDetectOutside(dropdownRef, false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen((state) => !state);
        }}
        ref={dropdownRef}
        className="bg-ceos-1 rounded-[5px] text-white px-4 py-1 font-bold"
      >
        {title}
        <span className="ml-2"> ▼</span>
      </button>

      <ul
        className={`absolute bg-white w-full text-black rounded-[5px] overflow-auto ${
          isOpen ? 'visible shadow-md' : 'hidden'
        }`}
      >
        {options.map((option, idx) => (
          <li
            key={idx}
            className="w-full px-4 pb-[0.5px] mb-[0.5px] whitespace-nowrap"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
