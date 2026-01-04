"use client";
import { SnackbarProvider } from "notistack";
import KeycloakProvider from "../providers/KeycloakProvider";
import { ActionDialogProvider } from "@repo/ui";
import { MainAppBar } from "../components/MainAppBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <KeycloakProvider>
          <SnackbarProvider>
            <ActionDialogProvider>
              <MainAppBar />
              {children}
            </ActionDialogProvider>
          </SnackbarProvider>
        </KeycloakProvider>
      </body>
    </html>
  );
}
