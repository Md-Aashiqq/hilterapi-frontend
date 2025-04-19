'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { AiOutlineSend } from "react-icons/ai";

interface CommandBoxProps {
  onSubmit?: (command: string) => void;
}

const CommandBox: React.FC<CommandBoxProps> = ({ onSubmit }) => {
  const [command, setCommand] = useState<string>('');

  const handleSend = () => {
    if (!command.trim()) return;
    onSubmit?.(command); // optional callback
    console.log('Customer Command:', command); // replace with API call if needed
    setCommand('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <div className="w-full max-w-xl flex items-center border border-gray-300 rounded-xl px-4 py-2 shadow-sm bg-white">
      <input
        type="text"
        placeholder="Add a command or special request..."
        value={command}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="flex-1 outline-none text-sm md:text-base bg-transparent"
      />
      <button
        onClick={handleSend}
        className="ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default CommandBox;
