import { FormSchema } from "types/formSchemaTypes";

export const formSchema: FormSchema = {
  formTitle: "User Registration Form",
  formDescription: "Please fill out the form to register.",
  fields: [
    {
      id: "username",
      type: "text",
      label: "Username",
      required: true,
      placeholder: "Enter your username",
      validation: {
        minLength: 3,
        maxLength: 20,
      },
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "Enter your email",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address",
      },
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      required: true,
      placeholder: "Enter a secure password",
      validation: {
        minLength: 8,
        message: "Password must be at least 8 characters long",
      },
    },
    {
      id: "dob",
      type: "date",
      label: "Date of Birth",
      required: false,
    },
    {
      id: "gender",
      type: "radio",
      label: "Gender",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
    {
      id: "age",
      type: "number",
      label: "Age",
      required: true,
      placeholder: "Enter your age",
      validation: {
        min: 18,
        max: 99,
        message: "Age must be between 18 and 99"
      }
    },
    {
      id: "country",
      type: "select",
      label: "Country",
      required: true,
      options: [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" }
      ]
    },
    {
      id: "hobbies",
      type: "checkbox",
      label: "Hobbies",
      required: false,
      options: [
        { value: "reading", label: "Reading" },
        { value: "traveling", label: "Traveling" },
        { value: "sports", label: "Sports" },
      ],
    },
    {
      id: "bio",
      type: "textarea",
      label: "Short Bio",
      required: false,
      placeholder: "Tell us about yourself...",
    },
    {
      id: "profilePicture",
      type: "file",
      label: "Upload Profile Picture",
      required: false,
    },
  ],
  buttons: [
    { id: 1, label: "Submit", type: "submit", color: "primary" },
    { id: 2, label: "Cancel", type: "reset", color: "seconday" },
  ],
};
