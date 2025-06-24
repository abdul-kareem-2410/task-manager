# Task Management Application

A comprehensive task management system with advanced filtering, categorization, and analytics features, built with Next.js and React for efficient project and personal task organization.

## Overview

The Task Management Application is a full-featured productivity tool designed to help users organize, track, and manage their tasks effectively. It combines traditional task management functionality with advanced features like priority systems, tag-based organization, due date tracking, and comprehensive analytics to provide insights into productivity patterns.

## Key Features

**Advanced Task Organization**: Create tasks with detailed descriptions, priority levels (low, medium, high), status tracking (todo, in-progress, completed), due dates, and custom tags for flexible categorization and organization.

**Smart Dashboard Analytics**: Real-time dashboard displaying key metrics including total tasks, completion rates, in-progress items, and overdue task alerts with visual indicators and progress tracking.

**Flexible Filtering & Search**: Multi-dimensional filtering system allowing users to filter tasks by status, priority, tags, and due dates, with search functionality across task titles and descriptions.

**Priority & Status Management**: Visual priority indicators with color-coded badges, status progression tracking, and overdue task highlighting to help users focus on critical items.

**Tag-Based Categorization**: Dynamic tag system allowing users to create custom tags for projects, contexts, or any organizational method, with tag-based filtering and management.

**Due Date Tracking**: Comprehensive date management with overdue detection, date formatting, and visual indicators for approaching deadlines.

## Technical Implementation

**State Management**: Built custom React hooks (`useTasks`) for centralized task state management, handling CRUD operations, filtering logic, and analytics calculations with localStorage persistence.

**Form Validation**: Implemented robust form validation using React Hook Form integrated with Zod schemas for type-safe data validation and error handling.

**Data Persistence**: Client-side data storage using browser localStorage with automatic save/load functionality, ensuring tasks persist across browser sessions without requiring backend infrastructure.

**Component Architecture**: Modular component design with reusable UI components including TaskCard, TaskForm, Dashboard, and specialized components for different views and interactions.

**Analytics Engine**: Built-in analytics system that calculates task statistics, completion rates, overdue tracking, and productivity metrics with real-time updates.

## Technologies Used

- **Frontend Framework**: Next.js 14 with App Router and React Server Components
- **Styling**: Tailwind CSS with custom component styling and responsive design
- **Form Management**: React Hook Form for form state management and validation
- **Validation**: Zod schemas for runtime type checking and data validation
- **State Management**: Custom React hooks with localStorage integration
- **UI Components**: Shadcn/ui component library for consistent, accessible UI elements
- **Icons**: Lucide React for scalable vector icons
- **Date Handling**: Native JavaScript Date API for date manipulation and formatting


## Architecture

The application follows a clean separation of concerns with custom hooks managing business logic, reusable UI components for presentation, and a centralized data layer using localStorage. The task management system is built around a flexible data model that supports extensibility while maintaining performance through efficient state management and optimized re-rendering patterns.
