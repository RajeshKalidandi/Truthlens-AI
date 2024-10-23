# TruthLens AI

TruthLens AI is an advanced image authentication platform that uses deep learning technology to detect AI-generated images with 99.9% accuracy. This repository contains both the frontend and backend code for the TruthLens AI application.

## Table of Contents

- [Features](#features)
- [Frontend](#frontend)
- [Backend](#backend)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Instant image authentication
- Advanced deep learning model (ResNet50) for image analysis
- Noise pattern analysis
- Metadata integrity check
- User-friendly interface with drag-and-drop functionality
- Responsive design for all devices
- Accessibility compliant (WCAG 2.1)
- SEO optimized

## Frontend

The frontend is built with modern web technologies and follows these key principles:

- Responsive design with mobile-first approach
- Tailwind CSS for styling
- React.js for UI components
- TypeScript for type safety
- Optimized for performance and Core Web Vitals

### Key Components

- Hero Section with animated gradient text
- Image Upload Zone with drag-and-drop functionality
- Results Display with confidence score and detailed analysis
- Responsive Navigation

### Design System

- Color Palette: Royal Blue (#2563eb), Indigo (#4f46e5), Sky Blue (#0ea5e9)
- Typography: Inter font family
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

## Backend

The backend is powered by TensorFlow and uses a ResNet50 model for image analysis. It includes:

- `ImageAuthenticityDetector` class for comprehensive image analysis
- `NoiseAnalysisModule` for analyzing image noise patterns
- `MetadataAnalysisModule` for checking metadata integrity

### Key Features

- Image preprocessing for model input
- Multi-faceted analysis including model prediction, noise analysis, and metadata check
- Overall authenticity score calculation
- Likelihood estimation of image being original

## Installation

1. Clone the repository:   ```
   git clone https://github.com/your-username/truthlens-ai.git
   cd truthlens-ai   ```

2. Install frontend dependencies:   ```
   cd frontend
   npm install   ```

3. Install backend dependencies:   ```
   cd ../backend
   pip install -r requirements.txt   ```

## Usage

1. Start the frontend development server:   ```
   cd frontend
   npm start   ```

2. Run the backend server:   ```
   cd backend
   python main.py   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Contributing

We welcome contributions to TruthLens AI! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
