import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const handleActiveLink = () => {
    if (rest.href === '/') {
      return asPath === rest.href
        ? activeClassName
        : '';
    } else {
      return asPath.includes(String(rest.href))
        ? activeClassName
        : '';
    }
  }

  const className = handleActiveLink();

  return (
    <Link {...rest} >
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}