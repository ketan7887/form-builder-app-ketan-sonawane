import React from "react";
import { FieldSchema } from "types/formSchemaTypes";

interface FormFieldProps {
    field: FieldSchema;
    value: string;
    error?: string;
    onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, error, onChange }) => {
    const renderInput = () => {
        switch (field.type) {
            case "text":
            case "email":
            case "password":
            case "date":
                return (
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder || ""}
                        required={field.required}
                        className="w-full px-4 py-2 mt-2 border rounded dark:bg-gray-700 dark:text-white"
                        minLength={field.validation?.minLength}
                        maxLength={field.validation?.maxLength}
                        pattern={field.validation?.pattern}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                );
            case "textarea":
                return (
                    <textarea
                        id={field.id}
                        placeholder={field.placeholder || ""}
                        required={field.required}
                        className="w-full px-4 py-2 mt-2 border rounded dark:bg-gray-700 dark:text-white"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                );
            case "radio":
                return field?.options?.map((option: any) => (
                    <label key={option.value} className="inline-flex items-center mr-4">
                        <input
                            type="radio"
                            name={field.id}
                            value={option.value}
                            required={field.required}
                            className="form-radio text-blue-500"
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <span className="ml-2 dark:text-gray-300">{option.label}</span>
                    </label>
                ));
            case "checkbox":
                return field?.options?.map((option: any) => (
                    <label key={option.value} className="inline-flex items-center mr-4">
                        <input
                            type="checkbox"
                            name={field.id}
                            value={option.value}
                            className="form-checkbox text-blue-500"
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <span className="ml-2 dark:text-gray-300">{option.label}</span>
                    </label>
                ));
            case "file":
                return (
                    <input
                        type="file"
                        id={field.id}
                        className="mt-2 block w-full text-sm text-gray-500 dark:text-gray-300"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="mb-4">
            <label
                htmlFor={field.id}
                className="block text-gray-700 dark:text-gray-300 font-medium"
            >
                {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {renderInput()}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default FormField;
