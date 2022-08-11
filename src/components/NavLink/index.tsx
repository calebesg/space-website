import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'

import styles from './styles.module.scss'

interface NavLinkProps extends LinkProps {
  children: ReactElement
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? styles.active : ''

  return <Link {...rest}>{cloneElement(children, { className })}</Link>
}
