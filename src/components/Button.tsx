export default function Button({ text }: { text: string }): JSX.Element {
  return (
    <button
      type="button"
      className="bg-brandprimary text-white w-[320px] h-[56px] rounded-full font-semibold"
    >
      {text}
    </button>
  );
}
