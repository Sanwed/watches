import {ChangeEvent, FormEvent} from "react";
import {FormData} from "../interfaces/interfaces.tsx";

interface WatchesFormProps {
  formData: FormData,
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void
}

function WatchesForm({formData, onChange, onSubmit}: WatchesFormProps) {
  return (
    <form className='watches__form' onSubmit={onSubmit}>
      <label className='watches__form-label'>
        <span>Название</span>
        <input value={formData.title} onChange={onChange} type="text" name='title' required maxLength={20} />
      </label>
      <label className='watches__form-label'>
        <span>Временная зона</span>
        <input value={formData.timeZone} onChange={onChange} type="number" name='timeZone' min={-12} max={14} />
      </label>
      <button className='watches__form-submit' type='submit'>Добавить</button>
    </form>
  )
}

export default WatchesForm
