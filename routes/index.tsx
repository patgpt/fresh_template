import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="h-full px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6 rounded-full shadow-2xl"
          src="/pfp.webp"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Patrick Kelly</h1>
        <p class="my-4">
          Hey there! Wave 👋 I'm Patrick Kelly This is a Fresh app. It's a Preact app with server-side rendering
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
