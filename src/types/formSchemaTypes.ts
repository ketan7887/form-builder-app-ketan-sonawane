/** Represents the overall form schema */
export interface FormSchema {
    formTitle: string;                      // Form title
    formDescription?: string;               // Optional form description
    fields: FieldSchema[];                  // List of form fields
  }
  
  /** Represents each form field */
  export interface FieldSchema {
    id: string;                             // Unique identifier for the field
    type: FieldType;                        // Field type (text, email, password, etc.)
    label: string;                          // Field label
    required?: boolean;                     // Whether the field is required
    placeholder?: string;                   // Optional placeholder text
    validation?: FieldValidation;           // Optional validation rules
    options?: Option[] | undefined;              
    value?:string;       // For radio or checkbox types
  }
  
  /** Represents validation rules for a field */
  export interface FieldValidation {
    minLength?: number;                     // Minimum length of the input
    maxLength?: number;                     // Maximum length of the input
    pattern?: string;                       // Regex pattern for input validation
    message?: string;                       // Custom validation message
  }
  
  /** Represents options for fields like radio buttons and checkboxes */
  export interface Option {
    value: string;                          // Option value
    label: string;                          // Display label for the option
  }
  
  /** Union type for field types */
  export type FieldType =
    | "text"
    | "email"
    | "password"
    | "date"
    | "radio"
    | "checkbox"
    | "textarea"
    | "file";
  