import { Home, UserPlus, Inbox, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Header from './Header';
import Footer from './Footer';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Create',
    url: '/create',
    icon: UserPlus,
  },
  // {
  //   title: 'Inbox',
  //   url: '/',
  //   icon: Inbox,
  // },
  // {
  //   title: 'Settings',
  //   url: '#',
  //   icon: Settings,
  // },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="h-full flex flex-col">
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Footer />
      </SidebarFooter>
    </Sidebar>
  );
}
