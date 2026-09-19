import React from 'react';
import { monaco } from '@osd/monaco';
import './editor.scss';
export interface Props {
    /** Width of editor. Defaults to 100%. */
    width?: string | number;
    /** Height of editor. Defaults to 100%. */
    height?: string | number;
    /** ID of the editor language */
    languageId: string;
    /** Value of the editor */
    value: string;
    /** Function invoked when text in editor is changed */
    onChange: (value: string) => void;
    /**
     * Options for the Monaco Code Editor
     * Documentation of options can be found here:
     * https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorConstructionOptions.html
     */
    options?: monaco.editor.IEditorConstructionOptions;
    /**
     * Suggestion provider for autocompletion
     * Documentation for the provider can be found here:
     * https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionItemProvider.html
     */
    suggestionProvider?: monaco.languages.CompletionItemProvider;
    /**
     * Signature provider for function parameter info
     * Documentation for the provider can be found here:
     * https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SignatureHelpProvider.html
     */
    signatureProvider?: monaco.languages.SignatureHelpProvider;
    /**
     * Hover provider for hover documentation
     * Documentation for the provider can be found here:
     * https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.HoverProvider.html
     */
    hoverProvider?: monaco.languages.HoverProvider;
    /**
     * Language config provider for bracket
     * Documentation for the provider can be found here:
     * https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LanguageConfiguration.html
     */
    languageConfiguration?: monaco.languages.LanguageConfiguration;
    /**
     * Function called before the editor is mounted in the view
     */
    editorWillMount?: () => void;
    /**
     * Function called before the editor is mounted in the view
     * and completely replaces the setup behavior called by the component
     */
    overrideEditorWillMount?: () => void;
    /**
     * Function called after the editor is mounted in the view
     */
    editorDidMount?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
    /**
     * Should the editor use the dark theme
     */
    useDarkTheme?: boolean;
    /**
     * Whether the suggestion widget/window will be triggered upon clicking into the editor
     */
    triggerSuggestOnFocus?: boolean;
}
export declare class CodeEditor extends React.Component<Props, {}> {
    _editor: monaco.editor.IStandaloneCodeEditor | null;
    _editorWillMount: (__monaco: unknown) => void;
    _editorDidMount: (editor: monaco.editor.IStandaloneCodeEditor, __monaco: unknown) => void;
    render(): React.JSX.Element;
    _updateDimensions: () => void;
}
export default CodeEditor;
//# sourceMappingURL=code_editor.d.ts.map