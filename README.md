# Dynamic Form Builder

## Overview

The **Dynamic Form Builder** is a flexible React-based project that dynamically generates forms from a JSON schema. It supports:

- **Dynamic Form Fields**: Generates various form elements like text inputs, email fields, password inputs, checkboxes, radio buttons, file uploads, and text areas.
- **Custom Button Actions**: Buttons with custom functionalities defined in the schema.
- **Validation**: Real-time validation for fields based on schema-defined rules.
- **JSON Schema Editor**: Users can dynamically edit the form schema using a built-in JSON editor.
- **Dark Mode**: Built-in support for light and dark themes.
- **Form Reset**: Reset the form to initial or default values.

---

## Features

1. **Dynamic Form Rendering**

   - The form elements are generated based on a JSON schema.
   - Schema supports advanced configurations like validation rules, placeholders, and custom button actions.

2. **Custom Actions for Buttons**

   - Define and execute custom actions for buttons of type `button` in the schema.

3. **Real-time Validation**

   - Validation rules include required fields, regex patterns, min/max lengths, and custom error messages.

4. **Dark Mode Toggle**

   - Switch between light and dark themes using a toggle button.

5. **Schema Editor**

   - Modify the form schema dynamically via an integrated JSON editor.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dynamic-form-builder.git
cd dynamic-form-builder
```

### 2. Install Dependencies

Using npm:

```bash
npm install --legacy-peer-deps
```

Or using yarn:

```bash
yarn install
```

### 3. Start the Development Server

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

The application will run at `http://localhost:3000`.

---

## Project Structure

```
src/
├── components/
│   ├── FormGenerator.tsx        # Main component for rendering the form
│   ├── FormField.tsx            # Component for rendering individual form fields
│   ├── FormButton.tsx           # Component for rendering dynamic buttons
│   ├── DarkModeToggle.tsx       # Component for toggling dark mode
│   ├── JsonEditor.tsx           # Component for editing the form schema
│
├── types/
│   └── FormSchema.ts            # TypeScript interfaces for the JSON schema
│
├── App.tsx                      # Main entry point for the app
├── index.tsx                    # App bootstrap file
└── styles/
    └── index.css                # Global styles
```

---

## Configuration

### JSON Schema Example

The form is rendered dynamically using a JSON schema. Below is an example schema:

```json
{
  "formTitle": "User Registration Form",
  "formDescription": "Please fill out the form to register.",
  "fields": [
    {
      "id": "username",
      "type": "text",
      "label": "Username",
      "required": true,
      "placeholder": "Enter your username",
      "validation": {
        "minLength": 3,
        "maxLength": 20
      }
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "Enter your email",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    }
  ],
  "buttons": [
    {
      "id": 1,
      "label": "Submit",
      "type": "submit",
      "color": "primary"
    },
    {
      "id": 2,
      "label": "Reset",
      "type": "reset",
      "color": "secondary"
    },
    {
      "id": 3,
      "label": "Custom Action",
      "type": "button",
      "color": "primary",
      "function": "customFunction"
    }
  ]
}
```

---

## Adding Custom Button Actions

You can define custom functions for buttons of type `button` in the `customFunctions` prop. Here is an example:

```tsx
const customFunctions = {
  customFunction: () => {
    alert("Custom Action Executed!");
    console.log("Custom function executed!");
  }
};

<FormGenerator schema={schema} customFunctions={customFunctions} />
```

---

## Key Scripts

- **Start Development Server**: `npm start` or `yarn start`
- **Build for Production**: `npm run build` or `yarn build`
- **Run Tests**: `npm test` or `yarn test`

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or support, please reach out to:

- **Email**: [your-email@example.com](mailto\:your-email@example.com)
- **GitHub**: [your-username](https://github.com/your-username)

