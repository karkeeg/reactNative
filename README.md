# Karkee's Photography App

A modern, visually appealing mobile app built with Expo and React Native, designed to showcase photography work and provide a smooth, user-friendly navigation experience. This project demonstrates advanced UI customization, including a floating, transparent tab bar with gradient highlights, and leverages utility-first styling with NativeWind (Tailwind CSS for React Native).

## What is this project?

**Karkee's Photography App** is a demo/photo portfolio app that features:

- A welcoming home screen for a photography brand.
- A custom tab bar that floats above the content, with gradient highlights and icons for Home, Search, Profile, and Saved screens.
- Clean, modern design with a focus on usability and aesthetics.
- Built to be easily extended for real-world use (e.g., adding photo galleries, onboarding, user profiles, etc.).

## How was this app made? (Workflow & Decisions)

### 1. **Project Initialization**

- Bootstrapped with [Expo](https://expo.dev/) for fast, cross-platform development.
- Used [Expo Router](https://expo.github.io/router/docs) for file-based navigation and easy tab/screen management.

### 2. **UI/UX Design**

- Chose a minimal, modern look with a soft background color and bold, readable typography.
- Designed a floating tab bar to create a premium, app-like feel.
- Used icons and labels together for clarity and accessibility.

### 3. **Tab Bar Customization**

- Overrode the default tab bar with a custom implementation:
  - **Transparent background** so the main content shows through.
  - **Floating effect** using absolute positioning and margin.
  - **No top border or shadow** for a seamless blend with the content.
  - **Gradient highlight** for the active tab using `expo-linear-gradient`.
  - **Optional blur effect** (with `expo-blur`) for a frosted glass look (can be toggled on/off).
  - **Icons and labels** stacked vertically, with smooth transitions.

### 4. **Styling with NativeWind**

- Used [NativeWind](https://www.nativewind.dev/) for utility-first styling, enabling rapid prototyping and easy theming.
- Applied Tailwind classes for layout, color, and typography directly in component props.

### 5. **Component Structure**

- Organized screens in the `app/(tabs)/` directory for clarity and scalability.
- Used a config array to DRY up tab bar icon/label logic.
- Ensured all screens are easily extendable for future features.

### 6. **Testing & Iteration**

- Previewed the app in Expo Go and simulators to ensure consistent appearance across devices.
- Tweaked margins, gradients, and icon sizes for best visual balance.
- Ensured the tab bar blends perfectly with the content and is accessible.

## Key Technologies

- **Expo**: Fast, cross-platform app development.
- **React Native**: Native performance and UI.
- **NativeWind**: Tailwind CSS for React Native.
- **Expo Router**: File-based navigation.
- **Expo Vector Icons**: Rich icon set.
- **Expo Linear Gradient**: For beautiful tab highlights.
- **Expo Blur**: For optional frosted glass effects.

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

2. **Start the app:**

   ```sh
   npx expo start
   ```

3. **Open in Expo Go:**
   - Scan the QR code with the Expo Go app on your device, or run in an emulator/simulator.

## Folder Structure

```
app/
  (tabs)/         # Tab screens and layout
  index.tsx       # Main entry point
assets/           # Images and fonts
```

## Customization

- **Tab Bar:** Edit `app/(tabs)/_layout.tsx` to change icons, labels, gradients, or layout.
- **Colors & Styles:** Use Tailwind/NativeWind classes in your components.
- **Add Screens:** Add new files in `app/(tabs)/` for more tabs.

## @Bibek-karki License


