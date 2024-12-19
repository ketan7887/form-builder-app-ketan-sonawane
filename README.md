# Dynamic Form Builder

## **Overview**
This project is a dynamic form builder application built using **React**, **TypeScript**, and **Tailwind CSS**. The application renders forms dynamically based on a JSON schema provided by the user. It supports multiple input types, real-time validation, dynamic buttons with customizable actions, and a dark mode toggle for enhanced usability.

### **Key Features**
- Dynamically renders forms based on a JSON schema.
- Supports input types like text, email, password, date, radio buttons, checkboxes, file upload, and textarea.
- Real-time validation for fields based on schema constraints.
- Custom buttons with optional callback functions.
- Dark mode toggle for a modern UI.
- Responsive and styled with **Tailwind CSS**.

---

## **Setup Instructions**

### **1. Prerequisites**
Ensure you have the following installed on your local machine:
- **Node.js** (v18 or above)
- **npm** or **yarn**

### **2. Clone the Repository**
Clone this repository to your local machine:
```bash
git clone https://github.com/ketan7887/form-builder-app-ketan-sonawane.git
```
Navigate to the project directory:
```bash
cd form-builder-app-ketan-sonawane
```

### **3. Install Dependencies**
Install all required dependencies using npm or yarn:
```bash
npm install --legacy-peer-deps
# or
yarn install
```

### **4. Start the Application**
Run the following command to start the development server:
```bash
npm start
# or
yarn start
```

The application will be accessible at `http://localhost:3000` in your web browser.

### **5. Build for Production**
To build the application for production:
```bash
npm run build
# or
yarn build
```
The optimized build files will be available in the `build` directory.

---

## **Usage**

### **1. Editing the JSON Schema**
The form is dynamically generated based on a JSON schema. You can modify the schema in the `src/schemas/formSchema.json` file to customize the form fields and buttons.

Example schema:
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
    }
  ]
}
```

### **2. Adding Custom Functions for Buttons**
Custom actions for buttons can be defined and passed to the `FormGenerator` component in the `App.tsx` file.

Example:
```tsx
const customFunctions = {
  customFunction: () => {
    alert("Custom Action Executed!");
  }
};
```
Pass the `customFunctions` object as a prop to the `FormGenerator` component.

---

## **Approach**

### **Dynamic Schema Parsing**
The application parses the JSON schema to:
- Render form fields dynamically.
- Apply real-time validation rules.
- Generate buttons with customizable actions.

### **State Management**
- The application uses local component state (`useState`) for managing form data and validation errors.
- Memoization hooks (`useCallback`, `React.memo`) optimize re-renders.

### **Styling**
- **Tailwind CSS** ensures a responsive and modern UI.
- Dark mode is implemented using Tailwind's `dark` class.

### **Componentization**
The application is divided into reusable components:
- `FormField` for rendering individual fields.
- `FormButton` for dynamic buttons.
- `DarkModeToggle` for switching themes.
- `FormGenerator` for orchestrating the form generation process.

---

## **Assumptions**
1. The JSON schema is always valid and provided in the correct format.
2. Custom button functions are defined and passed correctly via props.

---

## **Limitations**
1. **Large Forms**:
   - Rendering a large number of fields may affect performance. Optimizations like virtualization can be considered for such cases.

2. **Validation**:
   - Validation rules are limited to what is defined in the schema. Complex validation (e.g., cross-field validation) is not implemented.

3. **File Upload**:
   - The `file` input currently supports single file selection. Advanced features like drag-and-drop or previewing files are not included.

---

## **Future Enhancements**
1. **Advanced Validation**:
   - Implement cross-field validation and custom validation hooks.

2. **Drag-and-Drop for File Uploads**:
   - Add support for drag-and-drop file uploads with previews.

3. **Virtualization**:
   - Optimize rendering for large forms using libraries like `react-window`.

4. **Custom Themes**:
   - Allow users to define custom themes via configuration.

---

Thank you for using the Dynamic Form Builder! If you have any questions or suggestions, feel free to reach out!

