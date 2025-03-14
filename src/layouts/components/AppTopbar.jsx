import React from 'react';
import ModeToggle from '../components/ModeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

function Topbar() {
  return (
    <>
      <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>
      </header>
    </>
  );
}

export default Topbar;
