# Weather Aura UI

A comprehensive, modern weather and utility dashboard built with React and TypeScript. Weather Aura UI combines real-time weather information with a suite of essential tools including world clocks, time zone converters, calendars, news, space data, timers, and calculators—all in one beautifully designed interface.

## Features

### 🌤️ Weather Dashboard
- **Real-time Weather Data**: Get current weather conditions for any city worldwide using the OpenWeatherMap API
- **Dynamic Backgrounds**: Visual themes that change based on weather conditions and time of day
- **Detailed Metrics**: Comprehensive weather information including temperature, humidity, wind speed, pressure, visibility, sunrise/sunset times, and coordinates
- **5-Day Forecast**: Extended weather predictions with visual icons and temperature ranges
- **Weather Maps**: Interactive weather maps (planned feature)
- **Weather Alerts**: Real-time weather warnings and notifications (planned feature)

### 📰 News Hub
- **Latest News**: Stay updated with current events
- **World News**: Global news coverage
- **Local News**: Location-based news updates
- **Technology News**: Latest in tech and innovation

### 🕐 World Clock & Time Tools
- **Major Cities Clock**: Time display for major cities around the world
- **Add Custom Locations**: Personalize your world clock with favorite cities
- **Time Zone Converter**: Convert times between different time zones
- **Time Zone Comparison**: Compare times across multiple locations
- **Popular Time Zones**: Quick access to commonly used time zones

### 📅 Calendar & Scheduling
- **Month View**: Interactive monthly calendar
- **Year View**: Annual calendar overview
- **Events Management**: Create and manage personal events
- **Reminders**: Set and track important reminders

### 🌌 Space & Astronomy
- **Moon Phases**: Current and upcoming moon phases
- **Sunrise/Sunset Times**: Accurate solar timings for any location
- **Astronomy Data**: Celestial events and astronomical information
- **ISS Tracker**: Track the International Space Station (planned feature)

### ⏱️ Timers & Productivity
- **Stopwatch**: Precise timing for activities
- **Countdown Timer**: Set custom countdowns
- **Alarm Clock**: Set and manage alarms
- **Pomodoro Timer**: Productivity-focused work/break intervals

### 🧮 Calculators
- **Age Calculator**: Calculate exact age in years, months, and days
- **Date Calculator**: Date arithmetic and differences
- **Time Calculator**: Time-based calculations
- **Timezone Calculator**: Advanced timezone conversions

### 👤 Account Management
- **User Login**: Secure authentication system
- **Profile Management**: Customize your user profile
- **Settings**: Personalize app preferences
- **Preferences**: Customize theme, notifications, and more

## Technologies Used

This project leverages modern web technologies for optimal performance and user experience:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom animations and responsive design
- **UI Components**: shadcn/ui built on Radix UI primitives for accessible, customizable components
- **State Management**: React Query (TanStack Query) for efficient server state management
- **Routing**: React Router DOM for client-side navigation
- **Charts & Visualizations**: Recharts for data visualization
- **Icons**: Lucide React for consistent, scalable icons
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for robust date manipulation
- **Theming**: next-themes for dark/light mode support
- **Notifications**: Sonner for elegant toast notifications

## How to Run the Project

Follow these steps to set up and run Weather Aura UI on your local machine:

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd weather-aura-ui-main
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
    cd weather-aura-ui-main; npm run dev
    (or )
   npm run dev
   
   ```

4. **Open in Browser**
   - The development server will start on `http://localhost:5173`
   - Open this URL in your browser to view the application


### Additional Commands

- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Run Linter**: `npm run lint`

## Testing

Currently, this project does not have automated test cases set up. The project uses ESLint for code quality checks, which can be run with:

```bash
npm run lint
```

### Future Testing Setup

To add testing in the future, consider implementing:
- **Unit Tests**: Using Vitest (recommended for Vite projects) or Jest for component and utility function testing
- **Integration Tests**: Using React Testing Library for component integration tests
- **E2E Tests**: Using Playwright or Cypress for end-to-end testing

Example test setup commands (to be added to package.json scripts):
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

## Assumptions and Design Choices

### Technical Assumptions
- **Modern Browser Support**: The application assumes users are using modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+) that support ES2020 features and modern CSS Grid/Flexbox.
- **Stable Internet Connection**: Real-time weather data and API calls require a stable internet connection. The app does not include offline functionality.
- **API Availability**: The application depends on external APIs (OpenWeatherMap, news APIs) being available and responsive.

### Design Choices
- **Component-Based Architecture**: Using React's component-based architecture for maintainability and reusability, with each feature (weather, news, timers, etc.) as a separate module.
- **TypeScript for Type Safety**: Implemented TypeScript throughout the application to catch type-related errors at compile time and improve developer experience.
- **Responsive Design First**: Mobile-first responsive design using Tailwind CSS ensures the app works seamlessly across all device sizes.
- **Accessibility Priority**: Using shadcn/ui components built on Radix UI primitives ensures WCAG compliance and screen reader support.
- **Performance Optimization**: 
  - Lazy loading of components and routes to improve initial load times
  - React Query for efficient server state management and caching
  - Vite for fast development builds and optimized production bundles
- **Theming System**: Implemented dark/light mode support using next-themes, allowing users to customize their visual experience.
- **Modular Feature Integration**: Each utility (weather, news, calculators, etc.) is designed as an independent module that can be maintained and updated separately.
- **API Integration Strategy**: Centralized API calls using React Query for consistent error handling, loading states, and caching across the application.
- **State Management**: Local component state for UI interactions, with React Query handling server state to avoid unnecessary complexity.

### Architectural Decisions
- **Single Page Application (SPA)**: All functionality is contained within a single page for faster navigation and better user experience.
- **Client-Side Routing**: Using React Router for navigation without full page reloads.
- **Utility-First CSS**: Tailwind CSS for rapid UI development and consistent design system.
- **Icon System**: Lucide React for scalable, consistent icons across the application.
- **Form Handling**: React Hook Form with Zod validation for robust form management and validation.
- **Date/Time Handling**: date-fns library for reliable date manipulation and formatting across different locales.

## Differences from Other Weather Apps/Websites

Weather Aura UI stands out from typical weather applications in several key ways:

### 🎯 **Comprehensive Utility Integration**
Unlike most weather apps that focus solely on meteorological data, Weather Aura UI serves as a complete dashboard for daily information needs. It seamlessly integrates weather data with time management tools, news, astronomical information, and productivity features—all accessible from a single, cohesive interface.

### 🎨 **Modern, Accessible Design**
Built with shadcn/ui components and Tailwind CSS, the app features a polished, professional design that prioritizes accessibility and user experience. The dynamic backgrounds and smooth animations create an engaging visual experience that adapts to weather conditions and time of day.

### ⚡ **Performance Optimized**
Using Vite for building and React Query for efficient data fetching, the app delivers fast load times and smooth interactions. The modular architecture ensures that only necessary components are loaded, optimizing performance across devices.

### 🔧 **Developer-Friendly Architecture**
The project demonstrates best practices in modern React development with TypeScript, providing a solid foundation for further customization and feature additions. The component-based structure makes it easy to extend functionality.

### 🌐 **Extensible Platform**
While weather is the core focus, the app's architecture supports easy addition of new utility modules. This makes it a scalable platform that can grow with user needs, unlike specialized single-purpose weather apps.

### 📱 **Responsive & Cross-Platform**
Designed with mobile-first principles, the app works seamlessly across desktop, tablet, and mobile devices, providing a consistent experience regardless of screen size.

## Deployment

### Using Lovable
This project is optimized for deployment on Lovable's platform.

### Custom Domain
You can connect a custom domain by navigating to Project > Settings > Domains and clicking "Connect Domain".

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service (Netlify, Vercel, etc.)

## Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests to help improve Weather Aura UI.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
