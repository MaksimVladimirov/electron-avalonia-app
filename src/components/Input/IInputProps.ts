export interface IInputProps {
  placeholder: string;
  maxLength: number;
  changeHandler: (e: React.ChangeEvent) => void;
  value: string;
  changeTouched: () => void;
}
