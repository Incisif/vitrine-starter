import { useLocomotiveContext } from '../contexts/LocomotiveProvider'

export const useLocomotiveScroll = () => {
  const { scroll } = useLocomotiveContext()

  return scroll
}
