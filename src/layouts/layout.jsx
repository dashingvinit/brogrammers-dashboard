import React from 'react';
import { ThemeProvider } from '../context/ThemeProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from './components/AppSidebar';
import Topbar from './components/AppTopbar';

const Layout = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="light">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-full">
          <Topbar />
          <div className="flex flex-1 flex-col gap-4 rounded-lg p-4 w-full">{children} </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
