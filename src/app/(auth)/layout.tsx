export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex flex-col justify-center max-w-[500px] h-screen my-0 mx-auto px-3">{children}</section>
  }