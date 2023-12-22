import React from 'react';

interface OptionProps {
  options: string[];
  title: string;
}

const Option = ({ options, title }: OptionProps) => {
  return (
    <div className="flex pb-3 overflow-auto whitespace-nowrap ">
      {options.map((option, idx) => (
        <div key={idx} className="mr-2 flex items-center">
          <input type="radio" name={title} value={option} className="" />
          <span className="ml-1">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default Option;
