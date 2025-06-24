"use client"

import { useState } from "react"
import { useTasks } from "@/hooks/use-tasks"
import TaskForm from "@/components/task-form"
import TaskCard from "@/components/task-card"
import Dashboard from "@/components/dashboard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search } from "lucide-react"
import type { Task } from "@/lib/types"

export default function Home() {
  const { tasks, loading, addTask, updateTask, deleteTask } = useTasks()
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<Task["status"] | "all">("all")
  const [filterPriority, setFilterPriority] = useState<Task["priority"] | "all">("all")

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = filterStatus === "all" || task.status === filterStatus
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority

    return matchesSearch && matchesStatus && matchesPriority
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Task Manager</h1>
          <p className="text-gray-600">Organize your work and boost productivity</p>
        </header>

        <Dashboard />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3">
            {showForm ? (
              <TaskForm
                onSubmit={(taskData) => {
                  addTask(taskData)
                  setShowForm(false)
                }}
                onCancel={() => setShowForm(false)}
              />
            ) : (
              <Button onClick={() => setShowForm(true)} className="w-full h-32 text-lg" variant="outline">
                <Plus className="h-6 w-6 mr-2" />
                Add New Task
              </Button>
            )}
          </div>

          <div className="lg:w-2/3">
            <div className="mb-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-4">
                <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value as Task["status"])}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterPriority} onValueChange={(value) => setFilterPriority(value as Task["priority"])}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredTasks.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {tasks.length === 0 ? "No tasks yet. Create your first task!" : "No tasks match your filters."}
                  </p>
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <TaskCard key={task.id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
