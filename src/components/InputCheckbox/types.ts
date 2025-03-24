import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onChange: (newValue: boolean) => void
  disabled?: boolean // added missing types 
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
