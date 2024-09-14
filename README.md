# Frontend Assignment

## Summary

This project involves creating a user interface to display a list of users in a table format. The data for the users will be fetched from the RandomUser API. The table will support filtering by name and gender, as well as pagination controls. The design for the UI follows the specifications provided in the linked Figma file.

## Requirements

### 1. Customer Table Implementation

- **Create a responsive table** to display user data.
- **Fetch user data** from the RandomUser API.
- **Display relevant user details**, such as name, gender, and email.

### 2. Filtering

- **Implement filtering functionality** by name and gender.
- **Ensure dynamic updates** to the displayed user list based on the selected filters.

### 3. Pagination

- **Implement pagination controls** to navigate through the user list.
- **Display a limited number of users per page** and allow navigation to different pages.

### 4. Design

- Follow the design specifications provided in the [Figma file](#) (replace with the actual link).

### 5. State Management

- Use a state management library such as **Jotai** or **Zustand** to manage the selection and removal of users from the table.

### 6. Unit Testing (Bonus)

- Write unit tests for components and functionality to ensure **reliability and maintainability**.

## Bonus Points

- Efficient and clean code with a **clear separation of concerns**.
- **Implement accessibility best practices**.
- **Handle edge cases**, such as empty states and error handling.

## Getting Started

To run the application, ensure you have Node.js version 18 installed. Follow these steps:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm run dev
   ``` 
4. **Run tests**
   ```bash
   npm test
   ``` 