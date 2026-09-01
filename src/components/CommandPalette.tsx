import { useEffect, useMemo, useState } from 'react';
import { Command, Download, Moon, Search, Sun, X } from 'lucide-react';

type CommandPaletteProps = { theme: 'dark' | 'light'; toggleTheme: () => void };

export default function CommandPalette({ theme, toggleTheme }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen((value) => !value); }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const actions = useMemo(() => [
    ...['home', 'about', 'skills', 'projects', 'contact'].map((id) => ({ label: `Go to ${id}`, icon: Command, run: () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) })),
    { label: theme === 'dark' ? 'Use light theme' : 'Use dark theme', icon: theme === 'dark' ? Sun : Moon, run: toggleTheme },
    { label: 'Download resume', icon: Download, run: () => window.open('/Mandeep_Dhiman_Resume_Updated.pdf', '_blank') },
  ], [theme, toggleTheme]);
  const matching = actions.filter((action) => action.label.toLowerCase().includes(query.toLowerCase()));
  const choose = (run: () => void) => { run(); setOpen(false); setQuery(''); };

  return <>
    <button onClick={() => setOpen(true)} aria-label="Open command menu" className="hidden lg:flex fixed right-5 bottom-5 z-40 items-center gap-2 rounded-xl border border-border bg-card/90 px-3 py-2 text-xs text-text-muted shadow-primary backdrop-blur hover:text-accent"><Search size={14} /><span>Quick menu</span><kbd className="rounded border border-border px-1.5 py-0.5">Ctrl K</kbd></button>
    {open && <div className="fixed inset-0 z-[110] flex items-start justify-center bg-black/55 p-4 pt-[16vh] backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-scale-in" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-border px-4"><Search size={18} className="text-accent" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pages and actions..." className="h-14 w-full bg-transparent text-sm text-heading outline-none placeholder:text-text-muted" /><button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary"><X size={18} /></button></div>
        <div className="p-2">{matching.map((action) => { const Icon = action.icon; return <button key={action.label} onClick={() => choose(action.run)} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-text-secondary hover:bg-accent-soft hover:text-accent"><Icon size={17} />{action.label}</button>; })}{matching.length === 0 && <p className="p-5 text-center text-sm text-text-muted">No matching actions.</p>}</div>
      </div>
    </div>}
  </>;
}
