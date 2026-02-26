// Adapted from Modelo project
import { useState, useEffect } from "react"

const TOAST_LIMIT = 1
// const TOAST_REMOVE_DELAY = 1000000

type ToastProps = {
  id: string
  dismiss: () => void
  update: (props: Partial<ToastProps>) => void
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement
  variant?: "default" | "destructive"
  [key: string]: any
}

let count = 0
function generateId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastStore = {
  state: {
    toasts: [] as ToastProps[],
  },
  listeners: [] as ((state: { toasts: ToastProps[] }) => void)[],
  
  getState: () => toastStore.state,
  
  setState: (nextState: any) => {
    if (typeof nextState === 'function') {
      toastStore.state = nextState(toastStore.state)
    } else {
      toastStore.state = { ...toastStore.state, ...nextState }
    }
    
    toastStore.listeners.forEach(listener => listener(toastStore.state))
  },
  
  subscribe: (listener: (state: { toasts: ToastProps[] }) => void) => {
    toastStore.listeners.push(listener)
    return () => {
      toastStore.listeners = toastStore.listeners.filter(l => l !== listener)
    }
  }
}

export const toast = ({ ...props }: Partial<ToastProps>) => {
  const id = generateId()

  const update = (props: Partial<ToastProps>) =>
    toastStore.setState((state: any) => ({
      ...state,
      toasts: state.toasts.map((t: ToastProps) =>
        t.id === id ? { ...t, ...props } : t
      ),
    }))

  const dismiss = () => toastStore.setState((state: any) => ({
    ...state,
    toasts: state.toasts.filter((t: ToastProps) => t.id !== id),
  }))

  toastStore.setState((state: any) => ({
    ...state,
    toasts: [
      { ...props, id, dismiss, update },
      ...state.toasts,
    ].slice(0, TOAST_LIMIT),
  }))

  return {
    id,
    dismiss,
    update,
  }
}

export function useToast() {
  const [state, setState] = useState<{ toasts: ToastProps[] }>(toastStore.getState())
  
  useEffect(() => {
    const unsubscribe = toastStore.subscribe((state) => {
      setState(state)
    })
    
    return unsubscribe
  }, [])
  
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    state.toasts.forEach((toast) => {
      if (toast.duration === Infinity) {
        return
      }

      const timeout = setTimeout(() => {
        toast.dismiss()
      }, toast.duration || 5000)

      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
    }
  }, [state.toasts])

  return {
    toast,
    toasts: state.toasts,
    dismiss: (toastId?: string) => toastStore.setState((state: any) => ({
      ...state,
      toasts: state.toasts.filter((t: ToastProps) => t.id !== toastId),
    })),
  }
}
