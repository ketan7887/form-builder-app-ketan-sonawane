import { FormSchema } from "types/formSchemaTypes"

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
  };