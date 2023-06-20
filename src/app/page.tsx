import { Divider } from "@/components/Divider";
import Books from "./books/page";
import Home from "./home/page";
import Release from "./release/page";
import Videos from "./videos/page";
import Contact from "./contact/page";

export default function App() {
  return (
    <>
      <Home />
      <div className="relative">
        <Release />
      </div>
      <div className="relative">
        <div className="relative">
          <Divider position="top" />
          <Divider position="bottom" />
        </div>
        {/* @ts-expect-error Server Component */}
        <Books />
      </div>
      <div className="relative">
        <Divider position="top" />
        <Divider position="bottom" />
        {/* @ts-expect-error Server Component */}
        <Videos />
      </div>
      <div className="relative">
        <Divider position="top" />
        <Divider position="bottom" />
        <Contact />
      </div>
    </>
  );
}
