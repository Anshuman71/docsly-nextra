import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { usePathname } from "next/navigation";

export default function DocslyClient() {
  const pathname = usePathname();
  return (
    <Docsly
      publicId="public_vvIoQlAhwLyCIj2VO8IVUA1Ka210rTKYM8rP"
      pathname={pathname}
    />
  );
}
