import {useEffect, useState} from "react";
import {Angle, Clock} from "../interfaces/interfaces.tsx";

type WatchesItemProps = Clock

function WatchesItem({title, timeZone}: WatchesItemProps) {
  const [angle, setAngle] = useState<Angle>({
    seconds: 0,
    minutes: 0,
    hours: 0
  })

  useEffect(() => {
    const updateAngle = () => {
      const now = new Date();
      const hours = now.getUTCHours()
      const minutes = now.getUTCMinutes()
      const seconds = now.getUTCSeconds()
      const angle = {
        seconds: seconds * 6,
        minutes: minutes * 6,
        hours: (hours + Number(timeZone)) * 30,
      }
      setAngle(angle)
    }

    updateAngle()

    const interval = setInterval(() => {
      updateAngle()
    }, 1000)

    return () => clearInterval(interval)
  }, [timeZone]);

  return (
    <div>
      <div>{title}</div>
      <div className='watches__item'>
        <div className='watches__seconds' style={{transform: `rotate(${angle.seconds}deg)`}}></div>
        <div className='watches__minutes' style={{transform: `rotate(${angle.minutes}deg)`}}></div>
        <div className='watches__hours' style={{transform: `rotate(${angle.hours}deg)`}}></div>
      </div>
    </div>
  )
}

export default WatchesItem
