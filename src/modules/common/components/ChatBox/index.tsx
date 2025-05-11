'use client';

import { handleNoteCommand } from '@lib/data/command';
import { handleGetNotes } from '@lib/data/handleGetNotes';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { AiOutlineSend } from "react-icons/ai";

interface CommandBoxProps {
  onSubmit?: (command: string) => void;
}

const CommandBox: React.FC<CommandBoxProps> = ({ onSubmit }) => {
  const [command, setCommand] = useState<string>('');

  const handleSend = async () => {
    if (!command.trim()) return;
    const result = await handleNoteCommand(command);
    // alert(result.message);
    setCommand('');
    const res = await handleGetNotes(); // ✅ await this
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
