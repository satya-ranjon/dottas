import "@/components/ui/globals.css";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { inter } from "@/components/ui/font";
import Provider from "@/provider/Provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00b96b",
                borderRadius: 0,
              },
            }}>
            <Provider>{children}</Provider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
