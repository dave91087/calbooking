# CalBooking

A React-based calendar booking application for managing appointments and scheduling.

## Overview

CalBooking is a modern web application built with React that enables users to manage calendar bookings and appointments. The application provides an intuitive interface for scheduling, viewing, and managing appointments.

## Features

- 📅 Interactive calendar interface
- 🕒 Appointment scheduling and management
- 📱 Responsive design for mobile and desktop
- 🎨 Modern React UI components
- 🔧 Easy to customize and extend

## Technology Stack

- **Frontend**: React 16.5+
- **Routing**: React Router DOM 4.3+
- **Build Tool**: Create React App with React Scripts 5.0+
- **Styling**: CSS3
- **Testing**: Jest and React Testing Library

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dave91087/calbooking.git
   cd calbooking
   ```

2. Navigate to the project directory:
   ```bash
   cd calbooking
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### Project Structure

```
calbooking/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   ├── App.test.js     # Application tests
│   ├── index.js        # Application entry point
│   ├── index.css       # Global styles
│   └── registerServiceWorker.js
├── package.json
└── README.md
```

### Development Workflow

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Make your changes** to the source files in the `src/` directory

3. **Run tests** to ensure everything works:
   ```bash
   npm test
   ```

4. **Build for production** when ready to deploy:
   ```bash
   npm run build
   ```

## Contributing

We welcome contributions to CalBooking! Here's how you can help:

### How to Raise an Issue

If you encounter a bug, have a feature request, or need help with the project:

1. **Check existing issues** first to avoid duplicates
2. **Create a new issue** on [GitHub Issues](https://github.com/dave91087/calbooking/issues)
3. **Use the appropriate template** (if available) or include:
   - **Clear title** describing the issue
   - **Detailed description** of the problem or feature request
   - **Steps to reproduce** (for bugs)
   - **Expected behavior** vs **actual behavior**
   - **Environment details** (OS, browser, Node.js version)
   - **Screenshots** or code snippets (if applicable)

### Issue Labels

- `bug` - Something isn't working correctly
- `enhancement` - New feature or improvement
- `documentation` - Documentation related
- `help wanted` - Extra attention is needed
- `good first issue` - Good for newcomers

### Development Guidelines

- Follow the existing code style and conventions
- Write tests for new features and bug fixes
- Update documentation when necessary
- Keep commits focused and write clear commit messages
- Test your changes thoroughly before submitting

## Deployment

The application can be deployed to various platforms:

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `build`

### Heroku
1. Create a Heroku app
2. Add the Node.js buildpack
3. Deploy from your Git repository

## Browser Support

CalBooking supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help with CalBooking:

1. Check the [documentation](#getting-started)
2. Search [existing issues](https://github.com/dave91087/calbooking/issues)
3. Create a [new issue](https://github.com/dave91087/calbooking/issues/new) if you can't find an answer

## Roadmap

- [ ] Enhanced calendar views (month, week, day)
- [ ] Integration with external calendar services
- [ ] Email notifications
- [ ] Recurring appointments
- [ ] Multi-timezone support
- [ ] Mobile app version

---

Built with ❤️ using [Create React App](https://create-react-app.dev/)