import { z } from "zod"

// Task types and schemas
export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  description: z.string().max(500, "Description too long").optional(),
  priority: z.enum(["low", "medium", "high"]),
  status: z.enum(["todo", "in-progress", "completed"]),
  dueDate: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  tags: z.array(z.string()),
})

export type Task = z.infer<typeof TaskSchema>

export const CreateTaskSchema = TaskSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  tags: z.array(z.string()).default([]),
})

export type CreateTask = z.infer<typeof CreateTaskSchema>

// Expense types (for future use)
export const categories = [
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Bills & Utilities",
  "Healthcare",
  "Travel",
  "Education",
  "Business",
  "Other",
] as const

export type Category = (typeof categories)[number]

export const ExpenseSchema = z.object({
  id: z.string(),
  description: z.string().min(3, "Description must be at least 3 characters"),
  amount: z.number().positive("Amount must be positive"),
  category: z.enum(categories),
  date: z.string(),
  createdAt: z.string(),
  aiSuggested: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
})

export type Expense = z.infer<typeof ExpenseSchema>

export const CreateExpenseSchema = ExpenseSchema.omit({
  id: true,
  createdAt: true,
  aiSuggested: true,
})

export type CreateExpense = z.infer<typeof CreateExpenseSchema>