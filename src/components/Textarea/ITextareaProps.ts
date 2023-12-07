export interface ITextAreaProps {
  placeholder: string;
  maxLength: number;
  value: string;
  changeHandler: (e: React.ChangeEvent) => void;
}
