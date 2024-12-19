import React, { useState } from 'react';
import FormGenerator from './components/FormGenerator';
import DarkModeToggle from './components/DarkModeToggle';
import { formSchema as defaultSchema } from 'data/formSchema';
import JsonEditor from './components/JsonEditor';
import { FormSchema } from 'types/formSchemaTypes';

const App: React.FC = () => {
  const [formSchema, setFormSchema] = useState<FormSchema>(defaultSchema);

  // function to handle any custom actions on the buttons
  const customFunctions = {
    customFunction: () => {
      alert("Custom Action Executed!");
      console.log("Custom function executed!");
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 pb-20 bg-gradient-to-r from-cyan-100 to-blue-200'>
      <header className='container mx-auto flex items-center mb-2'>
          <h1 className='flex-1 text-2xl font-bold text-black'>Form builder tool</h1>
          <DarkModeToggle /> {/*dark mode toggle switch*/}
      </header>
      <div className='container mx-auto'>
        <div className='flex gap-8 sm:flex-wrap'>
          <div className='flex-1'>
            <JsonEditor schema={formSchema} onSchemaChange={(schema) => setFormSchema(schema)} /> {/* Json editor component */}
          </div>
          <div className='flex-1'>
            <FormGenerator schema={formSchema} customFunctions={customFunctions} /> {/* main form generator component */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
