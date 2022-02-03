import { useCallback, useEffect, useState } from 'react'

const useTimer = ({ time, onEnd }: UseTimerProps): UseTimerReturned => {
  const [count, setCount] = useState(time)

  useEffect(() => {
    if (!count) return

    const reduceCount = setTimeout(() => setCount((count) => count - 1), 1000)
    if (!count) return undefined

    return () => clearTimeout(reduceCount)
  }, [count])

  useEffect(() => {
    if (count === 0) {
      onEnd()
      setCount(() => time)
    }
  }, [count])

  const resetTimer = useCallback(() => {
    setCount(() => time)
  }, [time])

  const reduceTime = useCallback(
    (time: number) => {
      if (count < 1) {
        return
      }
      setCount((count) => Math.max(count - time, 0))
    },
    [count]
  )

  return {
    remain: Math.max(count, 0),
    resetTimer,
    reduceTime,
  }
}

export default useTimer

interface UseTimerProps {
  time: number
  onEnd: () => void
}

interface UseTimerReturned {
  remain: number
  resetTimer: () => void
  reduceTime: (time: number) => void
}
