import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { usePathname } from "next/navigation";

export default function DocslyClient() {
  const pathname = usePathname();
  return (
    <Docsly
      publicId="public_DwriVUZS44cF6LJvVYqavLHUBs0YyIaXLVBl7BeNAuEjoK9v2DRevMsxqRUgrExh"
      pathname={pathname}
    />
  );
}
