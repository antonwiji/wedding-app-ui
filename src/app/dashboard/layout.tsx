import BottomNavigation from "@/components/BottomNavigation.tsx"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        {children}
       <BottomNavigation />
        </section>
  }