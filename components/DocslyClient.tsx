import Docsly from "@docsly/base";
import "@docsly/base/index.css";
import { usePathname } from "next/navigation";

export default function DocslyClient() {
  const pathname = usePathname();
  return <Docsly publicId="asdfasdf" pathname={pathname} />;
}
