import cn from 'classnames'
import { FunctionComponent } from 'react'
import s from './Container.module.css'

interface Props {
  className?: string
  children?: any
  el?: HTMLElement
}

const Container: FunctionComponent<Props> = ({
  children,
  className,
  el = 'div',
}) => {
  const rootClassName = cn(s.root, className)

  let Component: React.ComponentType<React.HTMLAttributes<
    HTMLDivElement
  >> = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
