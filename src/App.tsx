import React, { useState } from 'react';
import FormGenerator from './components/FormGenerator';
import DarkModeToggle from './components/DarkModeToggle';
import { formSchema as defaultSchema } from 'data/formSchema';
import JsonEditor from './components/JsonEditor';
import { FormSchema } from 'types/formSchemaTypes';

const App: React.FC = () => {
  const [formSchema, setFormSchema] = useState<FormSchema>(defaultSchema);


  const customFunctions = {
    customFunction: () => {
      alert("Custom Action Executed!");
      console.log("Custom function executed!");
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 pb-20'>
      <header>
        <div className='container mx-auto flex items-center'>
          <h1 className='flex-1 text-2xl font-bold text-black dark:text-white ps-5'>Form builder tool</h1>
          <DarkModeToggle />
        </div>
      </header>
      <div className='container mx-auto'>
      <div className='flex gap-8'>
        <div className='flex-1 border-r border-r-stone-400'>
          <JsonEditor schema={formSchema} onSchemaChange={(schema) => setFormSchema(schema)} />
        </div>
        {/* <div className="max-w-3xl mx-auto p-6"> */}
        <div className='flex-1'>
          <FormGenerator schema={formSchema} customFunctions={customFunctions} />
        </div>
        {/* </div> */}
      </div>
      </div>

    </div>
  );
};

export default App;
