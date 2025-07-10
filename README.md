# 🐾 Pet Adoption App (React Native)

A demo mobile app built with **React Native** that displays a list of adoptable pets. Users can view pet details, see their location on a map, and simulate adoption.

---

## ✨ Features

- Display pet cards with image, breed, age, and description
- Graceful fallback if pet image fails to load
- Map screen with user location (or defaults to Dubai)
- Mock pet data (no backend required)
- Modular components (`PetCard`, `PetImage`, `PetDetails`, `AppButton`)
- Designed for clean reusability and UI demos

---

## 🛠️ Tech Stack

- React Native (CLI)
- TypeScript (optional)
- React Navigation (stack + tabs)
- `react-native-maps`
- `react-native-geolocation-service`

---

## Installation

```bash
git clone https://github.com/your-username/pet-adoption-app.git
cd pet-adoption-app

# Install dependencies
yarn install

# iOS: install pods
cd ios && pod install && cd ..


src/
│
├── components/
│   ├── AppButton.tsx
│   ├── PetCard.tsx
│   ├── PetImage.tsx
│   └── PetDetails.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── MapScreen.tsx
│   ├── PaymentScreen.tsx
│   └── PetDetailScreen.tsx

│
├── data/
│   └── pets.ts
│
├── navigator/
│   ├── TabsNavigator.tsx
    └── RootStack.tsx
