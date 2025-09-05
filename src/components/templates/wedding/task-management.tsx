"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Plus,
  Edit3,
  Trash2,
  MapPin,
  Users,
  DollarSign,
  Heart
} from "lucide-react"

interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  category: 'venue' | 'vendors' | 'guests' | 'attire' | 'other'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  completed: boolean
  assignedTo?: string
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Book ceremony venue',
    description: 'Secure the church or ceremony location',
    dueDate: '2024-01-15',
    category: 'venue',
    priority: 'urgent',
    completed: false
  },
  {
    id: '2',
    title: 'Send save the dates',
    description: 'Design and mail save the date cards',
    dueDate: '2024-02-01',
    category: 'guests',
    priority: 'high',
    completed: true
  },
  {
    id: '3',
    title: 'Book photographer',
    description: 'Research and hire wedding photographer',
    dueDate: '2024-02-15',
    category: 'vendors',
    priority: 'high',
    completed: false
  },
  {
    id: '4',
    title: 'Order wedding dress',
    description: 'Find and order wedding dress with alterations timeline',
    dueDate: '2024-03-01',
    category: 'attire',
    priority: 'high',
    completed: false
  },
  {
    id: '5',
    title: 'Taste test catering',
    description: 'Schedule and attend catering tastings',
    dueDate: '2024-03-15',
    category: 'vendors',
    priority: 'medium',
    completed: false
  },
  {
    id: '6',
    title: 'Create wedding website',
    description: 'Build website with details for guests',
    dueDate: '2024-04-01',
    category: 'other',
    priority: 'medium',
    completed: true
  }
]

const categoryIcons = {
  venue: MapPin,
  vendors: Users,
  guests: Heart,
  attire: Edit3,
  other: CheckCircle2
}

const categoryColors = {
  venue: 'bg-muted text-muted-foreground',
  vendors: 'bg-muted text-muted-foreground', 
  guests: 'bg-muted text-muted-foreground',
  attire: 'bg-muted text-muted-foreground',
  other: 'bg-muted text-muted-foreground'
}

const priorityColors = {
  low: 'bg-muted text-muted-foreground',
  medium: 'bg-secondary text-secondary-foreground',
  high: 'bg-primary/10 text-primary',
  urgent: 'bg-destructive/10 text-destructive'
}

export function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [activeTab, setActiveTab] = useState('overview')
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    description: '',
    dueDate: '',
    category: 'other',
    priority: 'medium',
    completed: false
  })

  const completedTasks = tasks.filter(task => task.completed)
  const pendingTasks = tasks.filter(task => !task.completed)
  const urgentTasks = pendingTasks.filter(task => task.priority === 'urgent' || task.priority === 'high')
  
  const completionPercentage = Math.round((completedTasks.length / tasks.length) * 100)

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const addTask = () => {
    if (newTask.title && newTask.dueDate) {
      const task: Task = {
        ...newTask as Task,
        id: Date.now().toString()
      }
      setTasks([...tasks, task])
      setNewTask({
        title: '',
        description: '',
        dueDate: '',
        category: 'other',
        priority: 'medium',
        completed: false
      })
    }
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const TaskCard = ({ task }: { task: Task }) => {
    const daysUntil = getDaysUntilDue(task.dueDate)
    const isOverdue = daysUntil < 0 && !task.completed
    const CategoryIcon = categoryIcons[task.category]

    return (
      <Card className={`${task.completed ? 'opacity-60' : ''} ${isOverdue ? 'border-red-200 dark:border-red-800' : ''}`}>
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
              className="mt-1"
            />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className={`font-semibold ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {task.title}
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                  className="h-8 w-8 p-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">{task.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge className={categoryColors[task.category]} variant="outline">
                    <CategoryIcon className="w-3 h-3 mr-1" />
                    {task.category}
                  </Badge>
                  <Badge className={priorityColors[task.priority]} variant="outline">
                    {task.priority}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {isOverdue ? (
                      <span className="text-red-600 font-medium">
                        {Math.abs(daysUntil)} days overdue
                      </span>
                    ) : daysUntil === 0 ? (
                      <span className="text-orange-600 font-medium">Due today</span>
                    ) : daysUntil > 0 ? (
                      `${daysUntil} days left`
                    ) : (
                      new Date(task.dueDate).toLocaleDateString()
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Task Management</h1>
        <p className="text-muted-foreground">Stay on top of your wedding planning with organized tasks and deadlines</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="all-tasks">All Tasks</TabsTrigger>
          <TabsTrigger value="add-task">Add Task</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completionPercentage}%</div>
                <Progress value={completionPercentage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  {completedTasks.length} of {tasks.length} tasks completed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingTasks.length}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Tasks remaining
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">{urgentTasks.length}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Urgent & high priority
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{completedTasks.length}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Tasks finished
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Urgent Tasks */}
          {urgentTasks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-destructive mr-2" />
                  Urgent Tasks
                </CardTitle>
                <CardDescription>
                  These tasks need immediate attention
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {urgentTasks.slice(0, 3).map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </CardContent>
            </Card>
          )}

          {/* Recent Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
              <CardDescription>Your most recently added tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tasks.slice(0, 3).map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all-tasks" className="space-y-4">
          <div className="grid gap-4">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="add-task" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
              <CardDescription>Create a new task for your wedding planning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Task Title</label>
                  <Input
                    placeholder="Enter task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Due Date</label>
                  <Input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="Add task description..."
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newTask.category}
                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value as Task['category'] })}
                  >
                    <option value="venue">Venue</option>
                    <option value="vendors">Vendors</option>
                    <option value="guests">Guests</option>
                    <option value="attire">Attire</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as Task['priority'] })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <Button onClick={addTask} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}