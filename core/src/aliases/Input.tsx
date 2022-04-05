import * as React from 'react'

import {
  Button,
  Checkbox,
  ColorPicker,
  DatePicker,
  FileUpload,
  NumberInput,
  PasswordInput,
  PhoneInput,
  Radio,
  Slider,
  TextInput
} from '../interfaces'

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types
 */
export function Input({ type, label, value, disabled, children }: any) {
  switch (type) {
    case 'button':
      return <Button value={value} disabled={disabled}>{children}</Button>
    case 'checkbox':
      return <Checkbox disabled={disabled} />
    case 'color':
      return <ColorPicker />
    case 'date':
      return <DatePicker />
    case 'datetime-local':
      return null
    case 'email':
      return <TextInput label={label} value={value} disabled={disabled} />
    case 'file':
      return <FileUpload />
    case 'hidden':
    case 'image':
    case 'month':
      return null
    case 'number':
      return <NumberInput value={value} disabled={disabled} />
    case 'password':
      return <PasswordInput label={label} value={value} disabled={disabled} />
    case 'radio':
      return <Radio disabled={disabled} />
    case 'range':
      return <Slider value={value} disabled={disabled} />
    case 'reset':
    case 'search':
    case 'submit':
      return null
    case 'tel':
      return <PhoneInput value={value} disabled={disabled} />
    case 'text':
    case undefined:
      return <TextInput label={label} value={value} disabled={disabled} />
    case 'time':
    case 'url':
    case 'week':
      return null
    default:
      return null
  }
}