import { Link } from 'react-router-dom'
import { CheckCircle, Users, Shield, Zap } from 'lucide-react'
<<<<<<< HEAD

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TodoApp</span>
=======
import ThemeToggle from '../components/ThemeToggle'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">TodoApp</span>
>>>>>>> updated-roggle
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
<<<<<<< HEAD
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
=======
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
>>>>>>> updated-roggle
              >
                Login
              </Link>
              <Link
                to="/register"
<<<<<<< HEAD
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Get Started
              </Link>
=======
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
              >
                Get Started
              </Link>
              <ThemeToggle />
>>>>>>> updated-roggle
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Organize Your Life,
            <span className="text-blue-600"> One Task at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
=======
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Organize Your Life,
            <span className="text-primary"> One Task at a Time</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
>>>>>>> updated-roggle
            A powerful, multi-user todo application that helps you and your team stay organized, 
            focused, and productive. Simple, secure, and designed for modern workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
<<<<<<< HEAD
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
=======
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
>>>>>>> updated-roggle
            >
              Start Free Today
            </Link>
            <Link
              to="/login"
<<<<<<< HEAD
              className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
=======
              className="border border-border hover:border-foreground text-muted-foreground hover:text-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
>>>>>>> updated-roggle
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
=======
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
>>>>>>> updated-roggle
            Powerful features designed to help you manage tasks efficiently and collaborate with your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
<<<<<<< HEAD
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Management</h3>
            <p className="text-gray-600">
=======
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Task Management</h3>
            <p className="text-muted-foreground">
>>>>>>> updated-roggle
              Create, organize, and track your tasks with ease. Set priorities and due dates.
            </p>
          </div>

          <div className="text-center p-6">
<<<<<<< HEAD
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-user</h3>
            <p className="text-gray-600">
=======
            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Multi-user</h3>
            <p className="text-muted-foreground">
>>>>>>> updated-roggle
              Secure, individual workspaces for each user. Your tasks, your privacy.
            </p>
          </div>

          <div className="text-center p-6">
<<<<<<< HEAD
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600">
=======
            <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Secure</h3>
            <p className="text-muted-foreground">
>>>>>>> updated-roggle
              JWT authentication and encrypted data storage keep your information safe.
            </p>
          </div>

          <div className="text-center p-6">
<<<<<<< HEAD
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Modern</h3>
            <p className="text-gray-600">
=======
            <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-orange-600 dark:text-orange-300" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Fast & Modern</h3>
            <p className="text-muted-foreground">
>>>>>>> updated-roggle
              Built with React and Vite for lightning-fast performance and modern UX.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Organized?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
=======
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Organized?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
>>>>>>> updated-roggle
              Join thousands of users who are already managing their tasks more effectively.
            </p>
            <Link
              to="/register"
<<<<<<< HEAD
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
=======
              className="bg-background text-primary hover:bg-muted px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
>>>>>>> updated-roggle
            >
              Create Your Account
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
<<<<<<< HEAD
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-semibold">TodoApp</span>
            </div>
            <p className="text-gray-400">
=======
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold">TodoApp</span>
            </div>
            <p className="text-muted-foreground">
>>>>>>> updated-roggle
              © 2024 TodoApp. Built with ❤️ using the MERN stack.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

<<<<<<< HEAD
export default LandingPage 
=======
export default LandingPage
>>>>>>> updated-roggle
