import { ElementType } from "react"
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType; // sem as tags <T />
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}