import { ElementType } from "react"
import Link from 'next/link'
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType; // sem as tags <T />
  href: string;
}

export function NavLink({
  href,
  icon,
  children,
  ...rest
}: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}