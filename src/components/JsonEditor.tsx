import React, { useRef } from "react";
import { JsonEditor as Editor } from "jsoneditor-react";
import { debounce } from "../utils/utils";

interface JsonEditorProps {
    schema: any;
    onSchemaChange: (updatedSchema: any) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ schema, onSchemaChange }) => {
    const editorRef = useRef<any>(null);

    // const handleChange = (schema: any) => {
    //     if (schema) {
    //         onSchemaChange(schema);
    //     }
    // };

    const handleChange = debounce((schema: any) => {
        if (schema) {
            onSchemaChange(schema);
        }
      }, 500);

    return (
        <div className="ps-6 pe-3 py-6 bg-white dark:bg-gray-800 rounded shadow-md max-w-4xl mx-auto h-full">
            <h3 className="text-lg font-medium mb-2 dark:text-white">Edit JSON Schema</h3>
            <Editor
                ref={editorRef}
                value={schema}
                onChange={handleChange}
                mode="code"
                modes={["code", "tree"]}
            // theme={document.documentElement.classList.contains("dark") ? "ace/theme/twilight" : "ace/theme/github"}
            />
        </div>
    );
};

export default JsonEditor;
