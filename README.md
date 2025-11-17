# CalCount - Meal Calorie Count Generator

A modern web application for tracking and managing meal calories, built with Next.js and TypeScript.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Form Validation**: React Hook Form + Zod
- **Package Manager**: pnpm
- **Theme**: Dark/Light mode support with next-themes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or later
- pnpm 8.x or later

## 🛠️ Setup Instructions

1. **Clone the repository** (or use this directory):

   ```bash
   cd calcount
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your API keys and configuration:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
   # Add other environment variables as needed
   ```

4. **Run the development server**:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
calcount/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   ├── dashboard/         # Dashboard page
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles with Tailwind
│   ├── components/            # React components
│   │   ├── ui/                # shadcn/ui components (add via CLI)
│   │   └── theme-provider.tsx # Theme provider component
│   ├── lib/                   # Utility functions
│   │   ├── api.ts            # API helper functions
│   │   ├── auth.ts           # Authentication utilities
│   │   └── utils.ts          # General utilities (cn helper)
│   ├── stores/               # Zustand stores
│   │   ├── authStore.ts     # Authentication state
│   │   └── mealStore.ts     # Meal data state
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts         # Common types
│   └── styles/               # Additional styles (if needed)
├── public/                   # Static assets
├── .env.example             # Environment variables template
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.ts           # Next.js configuration
```

## 🎨 Adding UI Components

This project uses shadcn/ui for components. To add a new component:

```bash
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add input
# etc.
```

Available components: https://ui.shadcn.com/docs/components

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 🌐 API Configuration

The application is configured to use a backend API. Update the `NEXT_PUBLIC_API_BASE_URL` in your `.env` file to point to your API endpoint.

### Placeholder API Endpoints

The following endpoints are expected (to be implemented):

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/meals` - Get user meals
- `POST /api/meals` - Create a new meal
- `PUT /api/meals/:id` - Update a meal
- `DELETE /api/meals/:id` - Delete a meal

## 🎯 Next Steps

1. **Add shadcn/ui components** as needed for your UI
2. **Implement authentication** logic in login/register pages
3. **Create meal tracking** features in the dashboard
4. **Connect to your backend API** by updating the API base URL
5. **Add form validation schemas** using Zod
6. **Customize the theme** in `tailwind.config.ts` and `globals.css`

## 📝 Features to Implement

- [ ] User authentication (login/register)
- [ ] Meal logging and tracking
- [ ] Calorie calculation
- [ ] Daily/weekly reports
- [ ] Meal history
- [ ] User profile management
- [ ] Data visualization (charts/graphs)

## 🤝 Contributing

This is a template setup. Customize it according to your project needs.

## 📄 License

ISC

---

**Setup completed!** 🎉 Start building your features!
