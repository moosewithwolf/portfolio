import Navigation from './Navigation'

function Header() {
  return (
    <header>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-l font-light text-gray-900">Shinseong Kim</h1>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
