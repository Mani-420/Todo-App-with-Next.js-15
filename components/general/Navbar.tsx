import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Own's <span className="text-blue-600">Diary</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="/dashboard"
          >
            DashBoard
          </Link>
        </div>
      </div>

      <div>
        <Link
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          href="/auth/login"
        >
          Login
        </Link>
        <Link
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          href="/auth/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
