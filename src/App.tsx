import React from 'react';
import FormGenerator from './components/FormGenerator';
import DarkModeToggle from './components/DarkModeToggle';
import { formSchema } from 'data/formSchema';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <DarkModeToggle />
      <div className="max-w-3xl mx-auto p-6">
        <FormGenerator schema={formSchema} />
      </div>
    </div>
  );
};

export default App;
