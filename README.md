# Karkee's Photography Portfolio App

A beautiful and modern photography portfolio mobile app built with React Native and Expo. Showcase your photography work with a stunning, professional interface.

## Features

### 📱 **Home Screen**
- Featured photos with horizontal scrolling
- Photography categories with icons
- Recent work gallery
- Modern, clean design with gradient overlays

### 🔍 **Discover Screen**
- Search functionality for photos
- Category filters (Portrait, Landscape, Street, Architecture, etc.)
- Grid layout for photo browsing
- Real-time filtering and search

### 👤 **Profile Screen**
- Photographer information and bio
- Statistics (photos, followers, following, likes)
- Contact information
- Recent photos showcase
- Professional profile layout

### 💾 **Saved Screen**
- Favorites gallery
- Photo collections
- Tabbed interface for organization
- Save/unsave functionality

### 📸 **Photo Detail Screen**
- Full-screen photo viewing
- Detailed photo information
- Camera settings and metadata
- Comments and interactions
- Like, save, and share functionality
- Photographer information

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **Expo Router** - File-based routing
- **NativeWind** - Tailwind CSS for React Native
- **TypeScript** - Type safety
- **Ionicons** - Beautiful icon library
- **Expo Linear Gradient** - Gradient effects

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reactNative
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go app (iOS/Android)
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator

## Project Structure

```
reactNative/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home screen
│   │   ├── Search.tsx         # Discover screen
│   │   ├── profile.tsx        # Profile screen
│   │   ├── Saved.tsx          # Saved screen
│   │   └── _layout.tsx        # Tab navigation
│   ├── photos/
│   │   └── [id].tsx           # Photo detail screen
│   └── _layout.tsx            # Root layout
├── assets/
│   ├── fonts/
│   └── images/
├── app.json                   # Expo configuration
├── package.json               # Dependencies
└── tailwind.config.js         # Tailwind configuration
```

## Key Features

### 🎨 **Modern UI/UX**
- Clean, minimalist design
- Smooth animations and transitions
- Responsive layout for different screen sizes
- Professional color scheme

### 📊 **Data Management**
- Sample photography data included
- Structured photo information
- Category organization
- User interaction tracking

### 🔧 **Developer Experience**
- TypeScript for type safety
- Tailwind CSS for styling
- File-based routing with Expo Router
- Hot reloading for fast development

## Customization

### Adding Your Photos
1. Replace the sample photo URLs in the components
2. Update photographer information in `profile.tsx`
3. Modify categories and tags as needed
4. Add your own photo metadata

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update component styles using NativeWind classes
- Customize gradients and animations

### Features
- Add authentication for user accounts
- Implement real backend API integration
- Add photo upload functionality
- Include social sharing features

## Screenshots

The app includes:
- **Home Screen**: Featured photos and categories
- **Discover Screen**: Search and filter functionality
- **Profile Screen**: Photographer information and stats
- **Saved Screen**: Favorites and collections
- **Photo Detail Screen**: Full photo viewing with metadata

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the Expo documentation

---

**Built with ❤️ using React Native and Expo**


