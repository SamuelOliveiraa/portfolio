export default function Tag({ text }: { text: string }) {
	return (
		<div className="rounded-full bg-gray-200 text-gray-600 items-center justify-center w-fit text-sm px-5 py-1">
			{text}
		</div>
	);
}
