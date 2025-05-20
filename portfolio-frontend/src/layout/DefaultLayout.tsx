import { Header } from '@components/Header'
import  Footer from '@components/Footer'
// import Header from '@components/Header/Header'
// import Navigation from '@components/Header/Navigation'

type Props = {
  children: React.ReactNode
}

function DefaultLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
