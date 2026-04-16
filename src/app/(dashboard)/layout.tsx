import { HeaderBlue } from "@/components/HeaderBlue";


interface DashboardLayoutProps {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <HeaderBlue />
    
            <main className="">
              {children}
            </main>
          </div>
   
  );
};
 

