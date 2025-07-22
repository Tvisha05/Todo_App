import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Task } from '../types';
import { tasksAPI } from '../utils/api';
import { Plus, Settings, LogOut, Search, Filter, Calendar, CheckCircle, Clock, Edit } from 'lucide-react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';
<<<<<<< HEAD
=======
import ThemeToggle from '../components/ThemeToggle';
>>>>>>> toggle

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await tasksAPI.getAll();
      setTasks(response.tasks);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch tasks');
      toast.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  const handleToggleTask = async (taskId: string) => {
    try {
      await tasksAPI.toggleStatus(taskId);
      await fetchTasks(); // Refresh tasks
      toast.success('Task status updated');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update task');
    }
  };

  // Filter tasks based on search term and filters
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
=======
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-foreground">My Tasks</h1>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">Welcome, {user?.name}</span>
              <ThemeToggle />
              <button
                onClick={handleLogout}
                className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/80"
>>>>>>> toggle
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
<<<<<<< HEAD
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
=======
          <div className="mb-4 p-4 bg-destructive/10 border border-destructive text-destructive rounded">
>>>>>>> toggle
            {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mb-6 flex justify-between items-center">
          <Link
            to="/tasks/create"
<<<<<<< HEAD
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
=======
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 flex items-center gap-2"
>>>>>>> toggle
          >
            <Plus className="h-4 w-4" />
            Add New Task
          </Link>
          <Link
            to="/profile"
<<<<<<< HEAD
            className="text-blue-600 hover:underline flex items-center gap-2"
=======
            className="text-primary hover:underline flex items-center gap-2"
>>>>>>> toggle
          >
            <Settings className="h-4 w-4" />
            Profile Settings
          </Link>
        </div>

        {/* Search and Filters */}
<<<<<<< HEAD
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
=======
        <div className="mb-6 bg-background p-4 rounded-lg shadow border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
>>>>>>> toggle
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
>>>>>>> toggle
              />
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
<<<<<<< HEAD
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
>>>>>>> toggle
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as any)}
<<<<<<< HEAD
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
>>>>>>> toggle
              >
                <option value="all">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('all');
                  setPriorityFilter('all');
                }}
<<<<<<< HEAD
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center gap-2"
=======
                className="w-full px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 flex items-center justify-center gap-2"
>>>>>>> toggle
              >
                <Filter className="h-4 w-4" />
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Tasks List */}
<<<<<<< HEAD
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
            <p className="text-sm text-gray-600">
=======
        <div className="bg-background shadow overflow-hidden sm:rounded-md border border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <p className="text-sm text-muted-foreground">
>>>>>>> toggle
              Showing {filteredTasks.length} of {tasks.length} tasks
            </p>
          </div>
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12">
<<<<<<< HEAD
              <p className="text-gray-500 text-lg">
=======
              <p className="text-muted-foreground text-lg">
>>>>>>> toggle
                {tasks.length === 0 ? 'No tasks yet. Create your first task!' : 'No tasks match your filters.'}
              </p>
            </div>
          ) : (
<<<<<<< HEAD
            <ul className="divide-y divide-gray-200">
=======
            <ul className="divide-y divide-border">
>>>>>>> toggle
              {filteredTasks.map((task) => (
                <li key={task._id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={task.status === 'completed'}
                        onChange={() => handleToggleTask(task._id)}
<<<<<<< HEAD
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="ml-3 flex-1">
                        <p className={`text-sm font-medium ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {task.title}
                        </p>
                        {task.description && (
                          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                        )}
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
=======
                        className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                      />
                      <div className="ml-3 flex-1">
                        <p className={`text-sm font-medium ${task.status === 'completed' ? 'line-through text-muted-foreground' : 'text-foreground'}`}> 
                          {task.title}
                        </p>
                        {task.description && (
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                        )}
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
>>>>>>> toggle
                          {task.dueDate && (
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            {task.status === 'completed' ? (
<<<<<<< HEAD
                              <CheckCircle className="h-3 w-3 text-green-500" />
=======
                              <CheckCircle className="h-3 w-3 text-green-500 dark:text-green-400" />
>>>>>>> toggle
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {task.status}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
<<<<<<< HEAD
                        task.priority === 'high' ? 'bg-red-100 text-red-800' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
=======
                        task.priority === 'high' ? 'bg-destructive/10 text-destructive' :
                        task.priority === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                        'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
>>>>>>> toggle
                      }`}>
                        {task.priority}
                      </span>
                      <Link
                        to={`/tasks/${task._id}/edit`}
<<<<<<< HEAD
                        className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
=======
                        className="text-primary hover:text-primary/80 flex items-center gap-1"
>>>>>>> toggle
                      >
                        <Edit className="h-3 w-3" />
                        Edit
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
