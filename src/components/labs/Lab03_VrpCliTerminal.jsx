import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, RotateCcw } from 'lucide-react';

export default function Lab03_VrpCliTerminal() {
  const [view, setView] = useState('user');
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState([
    { text: 'Generic Network Operating System (NOS) CLI Interface', type: 'system' },
    { text: '<Router> เริ่มต้นที่ User View พิมพ์ system-view เพื่อเข้าสู่โหมดตั้งค่า หรือพิมพ์ ? เพื่อดูคำสั่ง', type: 'info' },
  ]);

  const terminalScreenRef = useRef(null);

  // Scroll only internally inside the terminal box when new logs appear, never scroll the page window
  useEffect(() => {
    if (terminalScreenRef.current) {
      terminalScreenRef.current.scrollTop = terminalScreenRef.current.scrollHeight;
    }
  }, [logs]);

  const getPrompt = () => {
    if (view === 'user') return '<Router>';
    if (view === 'system') return '[Router]';
    if (view === 'interface') return '[Router-GigabitEthernet0/0/1]';
    return '<Router>';
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const newLogs = [...logs, { text: `${getPrompt()} ${cmd}`, type: 'input' }];

    const lower = cmd.toLowerCase();
    if (lower === 'system-view' || lower === 'sys' || lower === 'configure terminal') {
      setView('system');
      newLogs.push({ text: 'Enter configuration view, return with quit or Ctrl+Z.', type: 'output' });
    } else if (lower === 'quit' || lower === 'q' || lower === 'exit') {
      if (view === 'interface') setView('system');
      else if (view === 'system') setView('user');
      newLogs.push({ text: 'Returning to previous view.', type: 'output' });
    } else if (lower === 'return' || lower === 'ctrl+z' || lower === 'end') {
      setView('user');
      newLogs.push({ text: 'Returning to base user view.', type: 'output' });
    } else if (lower.startsWith('interface') || lower.startsWith('int')) {
      if (view === 'system') {
        setView('interface');
        newLogs.push({ text: 'Entering GigabitEthernet0/0/1 interface configuration view.', type: 'output' });
      } else {
        newLogs.push({ text: 'Error: Please enter system configuration view first.', type: 'error' });
      }
    } else if (lower.includes('display version') || lower.includes('show version')) {
      newLogs.push({ text: 'NOS Software Platform v2.4.0 (Universal Kernel)\nUptime: 24 days, 12 hours\nMemory: 1024MB RAM, Flash: 256MB', type: 'output' });
    } else if (lower.includes('display ip interface') || lower.includes('show ip interface brief')) {
      newLogs.push({ text: 'Interface                         IP Address/Mask      Status     Protocol\nGigabitEthernet0/0/1              192.168.1.1/24       up         up\nGigabitEthernet0/0/2              10.0.0.1/30          up         up', type: 'output' });
    } else if (lower === '?' || lower === 'help') {
      newLogs.push({ text: 'Available commands:\n  system-view / conf t   Enter configuration view\n  display / show         View status and routing table\n  interface <id>         Configure interface port\n  quit / exit            Return to parent view\n  save / write           Save running configuration', type: 'info' });
    } else {
      newLogs.push({ text: `Command not recognized: '${cmd}'. Type '?' for help.`, type: 'error' });
    }

    setLogs(newLogs);
    setInput('');
  };

  return (
    <div className="space-y-3 font-mono">
      {/* CLI Controls Header */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
        <div className="flex items-center gap-2.5">
          <Terminal className="w-4 h-4 text-zinc-400" />
          <span className="font-bold text-zinc-200">Interactive CLI Terminal</span>
          <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px]">
            Mode: {view}
          </span>
        </div>
        <button
          onClick={() => setLogs([{ text: '<Router> Terminal cleared.', type: 'info' }])}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
          title="Clear screen"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Terminal Screen (Internal Scroll Only) */}
      <div 
        ref={terminalScreenRef}
        className="h-64 sm:h-72 rounded-xl bg-zinc-950 border border-zinc-800 p-4 text-xs overflow-y-auto space-y-1.5"
      >
        {logs.map((l, i) => (
          <div key={i} className={`whitespace-pre-line ${
            l.type === 'input' ? 'text-zinc-100 font-bold' :
            l.type === 'error' ? 'text-rose-400' :
            l.type === 'info' ? 'text-blue-400' :
            l.type === 'system' ? 'text-zinc-500' :
            'text-emerald-400'
          }`}>
            {l.text}
          </div>
        ))}
      </div>

      {/* Input Field (No autoFocus to prevent unwanted page scrolling) */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 p-2 rounded-xl bg-zinc-900 border border-zinc-800">
        <span className="text-xs font-bold text-zinc-300 pl-2">{getPrompt()}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="พิมพ์คำสั่ง เช่น system-view, display version, ? ..."
          className="flex-1 bg-transparent text-xs text-zinc-100 focus:outline-none placeholder:text-zinc-600"
        />
        <button type="submit" className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}