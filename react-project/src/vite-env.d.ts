/// <reference types="vite/client" />
declare namespace JSX {
    interface IntrinsicElements {
      'custom-uploader': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement,{
        value: File[];
        multiple: boolean;
      }>
    }
  }
  