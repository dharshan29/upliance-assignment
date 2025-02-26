# Project Structure

This document outlines the folder structure and implementation details for the project.

## Folder Structure

```plaintext
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜Counter.tsx
 ┃ ┣ 📜RichTextEditor.tsx
 ┃ ┣ 📜UserDetails.tsx
 ┃ ┣ 📜UserForm.tsx
 ┃ ┗ 📜style.css
 ┣ 📂lib
 ┃ ┗ 📜firebaseConfig.ts
 ┣ 📂pages
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┗ 📜PrivateRoute.tsx
 ┣ 📂store
 ┃ ┣ 📜counterSlice.ts
 ┃ ┣ 📜store.ts
 ┃ ┣ 📜textEditorSlice.ts
 ┃ ┗ 📜userSlice.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## Key Features

- **Routing**: Uses `react-router-dom` for protected (`/`) and public (`/login`) routes.
- **State Management**: Utilizes Redux with persist storage for login state and application data.
  - `counterSlice.ts`: Manages counter state.
  - `textEditorSlice.ts`: Handles state for the Tiptap Rich Text Editor.
  - `userSlice.ts`: Manages user authentication state with Firebase mock login.
- **Styling**: MUI (Material UI) with custom theme and styles.
- **Firebase Authentication**: Mock login setup in `firebaseConfig.ts`.
- **Rich Text Editor**: Tiptap integration with `RichTextEditor.tsx` component.

## How to Run

1. **Clone the repository:**
```sh
git clone https://github.com/dharshan29/upliance-assignment.git
```

2. **Install dependencies:**
```sh
npm install --force
```

3. **Setup Environment Variables:**
Create a `.env` file with dummy values for Firebase:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. **Run the Application:**
```sh
npm run dev
```

5. **Access in Browser:**
Visit `http://localhost:5173` to view the app.

## Additional Information

- Ensure Firebase authentication is set up properly for mock login.
- Check Redux dev tools for state management insights.
- MUI styles and components are used throughout the app for a consistent design.

## 🎯 Key Technologies & Libraries
- **Frontend Framework:** React 18+ with Vite for fast development.
- **State Management:** Redux Toolkit with Redux Persist for login state persistence.
- **Routing:** React Router v6 with a `ProtectedRoute` for authentication.
- **Firebase:** Mock login using Firebase Authentication.
- **UI Framework:** Material UI (MUI) for consistent styling.
- **Rich Text Editor:** Tiptap for an advanced text editing experience.

## 🔄 State Management
The Redux Store is configured with three slices:

- **counterSlice.ts:** Manages counter-related state and updates background Color.
- **textEditorSlice.ts:** Stores and manages the state of the RichTextEditor, allowing for controlled text inputs and editor commands.
- **userSlice.ts:** Manages user details filled in a form using Redux.
Integrates Redux Persist to maintain form data on page reloads.

## 🛠️ Routing Setup
- **Public Route:** `/login` → Displays the Login page.
- **Protected Route:** `/` → Shows the Home page, guarded by the `PrivateRoute` component.

### Example PrivateRoute implementation
```tsx
<Route 
  path="/" 
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  } 
/>
```

## 🔐 Authentication
- **Firebase Auth** is used to mock authentication.
- The `firebaseConfig.ts` under `lib/` directory initializes the Firebase app and sets up authentication.
- On successful login, the user data is stored in local Storage

## 🎨 Styling
- **MUI's theming** capabilities are used to maintain a consistent design language across the app.
- Custom MUI styles are applied using the `sx` prop.


## 📝 Rich Text Editor
- Integrated **Tiptap**, an advanced rich text editor.
- The `RichTextEditor.tsx` component is a controlled component, connected to the Redux store via `textEditorSlice.ts`.

