"use client";

import { useEffect, useState } from "react";
import keycloak from "../lib/keycloak";

export default function KeycloakProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    keycloak
      .init({ onLoad: "login-required", checkLoginIframe: false })
      .then(() => setReady(true));
  }, []);

  if (!ready) return <p>Bejelentkezés...</p>;

  return <>{children}</>;
}
