import WatchesForm from "./WatchesForm.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {Clock, FormData} from "../interfaces/interfaces.tsx";
import WatchesItem from "./WatchesItem.tsx";

function Watches() {
  const [clocks, setClocks] = useState<Clock[]>([])
  const [formData, setFormData] = useState<FormData>({
    title: '',
    timeZone: ''
  });

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({...prevState, [evt.target.name]: evt.target.value}))
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setClocks([...clocks, formData])
    setFormData({
      title: '',
      timeZone: ''
    })
  }

  return (
    <div className='watches'>
      <WatchesForm formData={formData} onChange={onChange} onSubmit={onSubmit} />
      <div className='watches__list'>
        {clocks && clocks.map((el, index) => (
          <WatchesItem key={index} title={el.title} timeZone={el.timeZone} />
        ))}
      </div>
    </div>
  )
}

export default Watches
