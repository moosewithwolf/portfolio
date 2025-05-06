import { Header } from '@components/Header'

type Props = {
  children: React.ReactNode
}

function DefaultLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  )
}

export default DefaultLayout
