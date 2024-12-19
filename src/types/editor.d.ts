declare module "jsoneditor-react" {
    import { JSONEditorOptions } from "jsoneditor";
  
    interface JsonEditorProps {
      value?: any;
      onChange?: (updatedJson: any) => void;
      mode?: "tree" | "view" | "form" | "code" | "text";
      modes?: Array<"tree" | "view" | "form" | "code" | "text">;
      name?: string;
      search?: boolean;
      indentation?: number;
      schema?: object;
      theme?: string;
      options?: Partial<JSONEditorOptions>;
      navigationBar?: boolean;
      statusBar?: boolean;
    }
  
    export class JsonEditor extends React.Component<JsonEditorProps> {}
  }
  