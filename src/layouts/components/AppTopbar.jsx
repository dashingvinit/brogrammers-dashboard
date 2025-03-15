import React from 'react';
import ModeToggle from '../components/ModeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

function Topbar() {
  return (
    <>
      {/* flex shrink-0 items-center gap-2 */}
      <header className="sticky top-0 border-b p-2 bg-background">
        <div className="flex items-center justify-between px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>
      </header>
    </>
  );
}

export default Topbar;
