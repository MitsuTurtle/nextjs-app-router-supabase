export default function ThirdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Layout 3</p>
      {children}
    </main>
  )
}
