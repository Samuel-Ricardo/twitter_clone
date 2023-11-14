export default function Loading() {
  return (
    <div className="flex flex-1 align items-center justify-center">
      <div className="w-16 h-16 animate-spin bg-cyan-800 rounded-full">
        <div className="w-16 h-16 m-2 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
