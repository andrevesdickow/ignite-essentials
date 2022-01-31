import { ElementType } from "react"
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ActiveLink } from "../ActiveLink"

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
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}