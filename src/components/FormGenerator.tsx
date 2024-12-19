import React, { useCallback, useState } from "react";
import FormField from "./FormField";
import { FormSchema, FieldSchema } from "types/formSchemaTypes";
import FormButton from "./FormButton";
interface FormGeneratorProps {
    schema: FormSchema;
    customFunctions?: { [key: string]: () => void };
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema, customFunctions = {} }) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Handle input changes and real-time validation
    const handleChange = (field: FieldSchema, value: any) => {
        setFormData((prevData) => ({ ...prevData, [field.id]: value }));
        // Validation logic
        let errorMessage = "";
        if (field.required && !value) {
            errorMessage = `${field.label} is required`;
        } else if (field.validation?.minLength && value.length < field.validation.minLength) {
            errorMessage = `${field.label} must be at least ${field.validation.minLength} characters`;
        } else if (field.validation?.maxLength && value.length > field.validation.maxLength) {
            errorMessage = `${field.label} cannot exceed ${field.validation.maxLength} characters`;
        } else if (field.validation?.pattern && !new RegExp(field.validation.pattern).test(value)) {
            errorMessage = field.validation.message || `${field.label} is invalid`;
        }
        setErrors((prevErrors) => ({ ...prevErrors, [field.id]: errorMessage }));
    };

    // Handle form reset
    const handleReset = useCallback(() => {
        setFormData({});
        setErrors({});
      }, []);

    // Form sumbit function
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        // Check any remaining errors
        const newErrors: { [key: string]: string } = {};
        schema.fields.forEach((field) => {
            if (field.required && !formData[field.id]) {
                newErrors[field.id] = `${field.label} is required`;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully:", formData);
        } else {
            console.log("Validation failed:", newErrors);
        }
    },[formData, schema.fields]);

    //handle for custom button click action
    const handleCustomButtonClick = useCallback((action: any) => {
        const customFunction = customFunctions[action];
        if (customFunction) {
            customFunction();
        } else {
            console.warn(`No custom function defined for action: ${action}`);
        }
    },[customFunctions]);

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 bg-white dark:bg-gray-800 rounded shadow-md max-w-4xl mx-auto"
        >
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
                {schema.formTitle}
            </h2>
            {schema.formDescription && (
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {schema.formDescription}
                </p>
            )}
            {schema.fields.map((field) => (
                <FormField
                    key={field.id}
                    field={field}
                    value={formData[field.id] || ""}
                    error={errors[field.id]}
                    onChange={(value) => handleChange(field, value)}
                />
            ))}
            <div className="flex gap-4">
                {schema.buttons.map((button) => (
                    <FormButton
                        key={button.id}
                        label={button.label}
                        type={button.type}
                        color={button.color}
                        className={
                            button.color === "primary"
                                ? "bg-blue-500 text-white hover:bg-blue-600"
                                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                        }
                        onClick={
                            button.type === "button"
                                ? () => handleCustomButtonClick(button.function)
                                : button.type === "reset"
                                    ? handleReset
                                    : undefined
                        }
                    />
                ))}
            </div>
        </form>
    );
};

export default FormGenerator;
