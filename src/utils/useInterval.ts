import React, { useState, useEffect, useRef } from 'react'

/**
 * Hook was taken from the article
 * https://usehooks-ts.com/react-hook/use-interval
 * @param callback
 * @param delay
 */

import { useIsomorphicLayoutEffect } from 'usehooks-ts'

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}
