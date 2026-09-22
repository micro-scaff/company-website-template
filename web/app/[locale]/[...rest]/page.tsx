import { notFound } from "next/navigation";

// 将语言目录内的未知地址交给该语言的 404，避免误显示其他页面。
export default function UnknownPage() {
  notFound();
}
