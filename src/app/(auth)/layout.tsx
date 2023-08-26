export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex flex-col h-screen justify-center">{children}</section>
  }