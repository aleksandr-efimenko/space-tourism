import React, { useState, useEffect, useRef } from 'react'

/**
 * Code was taking from the article
 * "Making setInterval Declarative with React Hooks"
 * by Dan Abramov
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @param callback
 * @param delay
 */
export function useInterval(callback: () => void | undefined, delay: number | null) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
