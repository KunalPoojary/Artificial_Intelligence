import { auth } from "@/auth";
import { SidebarDemo } from "@/components/global/sidebar";
import { Pacifico } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const pacifico = Pacifico({
  subsets: ["latin"], // Specify subsets you need
  weight: "400", // Pacifico only supports the 400 weight
  variable: "--font-pacifico", // Define a custom CSS variable to use this font
});
const ProtectedLayout = ({
  session,
  children,
}: {
  session: any;
  children: ReactNode;
}) => {
  return (
    <SessionProvider session={session}>
      <div className="flex h-screen relative">
        <SidebarDemo>
          <div
            className={`${pacifico.variable} p-4 font-sans bg-midnight-gray flex-1 overflow-x-hidden overflow-y-auto`}
          >
            {children}
          </div>
        </SidebarDemo>
      </div>
    </SessionProvider>
  );
};

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();
  return <ProtectedLayout session={session}>{children}</ProtectedLayout>;
}
