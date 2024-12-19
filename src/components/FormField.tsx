import React, { useRef } from "react";
import { FieldSchema } from "types/formSchemaTypes";

interface FormFieldProps {
    field: FieldSchema;
    value: string;
    error?: string;
    onChange: (value: string | File | number) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, error, onChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const renderInput = () => {
        switch (field.type) {
            case "text":
            case "email":
            case "password":
            case "date":
            case "number":
                return (
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder || ""}
                        required={field.required}
                        className="w-full px-5 py-2 mt-2 border rounded border-stone-400 dark:bg-gray-700 dark:text-white"
                        minLength={field.validation?.minLength}
                        maxLength={field.validation?.maxLength}
                        pattern={field.validation?.pattern}
                        value={value}
                        // onChange={(e) => onChange(e.target.value)}
                        onChange={(e) => onChange(field.type === "number" ? +e.target.value : e.target.value)}
                    />
                );
            case "textarea":
                return (
                    <textarea
                        id={field.id}
                        placeholder={field.placeholder || ""}
                        required={field.required}
                        className="w-full px-4 py-2 mt-2 border border-stone-400 rounded dark:bg-gray-700 dark:text-white"
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
                            className="form-checkbox text-blue-500 checked:bg-red-700"
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <span className="ml-2 dark:text-gray-300">{option.label}</span>
                    </label>
                ));
            case "file":
                return (
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
                        >
                            {value ? "Change File" : "Upload File"}
                        </button>
                        <input
                            type="file"
                            id={field.id}
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    onChange(e.target.files[0]);
                                }
                            }}
                        />
                        {value && typeof value === "object" && (
                            <span className="ml-4 text-gray-700 dark:text-gray-300">
                                {(value as File).name}
                            </span>
                        )}
                    </div>
                );
            case "select":
                return (
                    <select
                        id={field.id}
                        value={value || ""}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border border-stone-400 rounded dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select an option</option>
                        {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mb-4">
            <label
                htmlFor={field.id}
                className="block text-gray-700 dark:text-gray-300 font-medium text-sm"
            >
                {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {renderInput()}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default React.memo(FormField);
