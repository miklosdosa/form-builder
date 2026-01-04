import { Box } from "@mui/material";
import { ComponentType, PropsWithChildren, MouseEvent } from "react";
import keycloak from "../../lib/keycloak";

interface SignOutProps {
  Component?: ComponentType<any>;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const SignOut = ({
  Component = Box,
  onClick,
  children,
}: PropsWithChildren<SignOutProps>) => {
  const handleClick = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    onClick?.(e);
    logout();
  };
  const logout = () => {
    keycloak.logout();
  };
  return <Component onClick={handleClick}>{children}</Component>;
};

export { SignOut };
