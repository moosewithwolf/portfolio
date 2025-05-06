import Navigation from './Navigation'

function Header() {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Shinseong Kim</h1>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
