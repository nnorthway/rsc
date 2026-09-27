import ClientDemo from "../components/ClientDemo.js"
import RSCDemo from "../components/RSCdemo.js"
import DataFetchingDemo from "@/components/DataFetchingDemo.js"
import ServerActionsDemo from "@/components/ServerActionsDemo.js"

export default function Home() {
  return (
    <main>
      <p>Let's go!</p>
      <DataFetchingDemo />
      <ServerActionsDemo />
    </main>
  );
}
