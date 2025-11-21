import type { IconType } from "react-icons";

type SkillCardIconProps = {
	title: string;
	Icon: IconType;
} & React.SVGProps<SVGSVGElement>;

export default function SkillCardIcon({ title, Icon, ...rest }: SkillCardIconProps) {
	return (
		<div className="flex flex-col justify-center items-center gap-2 p-4 rounded-md hover:cursor-pointer hover:bg-gray-100 hover:scale-110 transition-all duration-200">
			<Icon title={title} {...rest} />

			<span className="text-gray-900">{title}</span>
		</div>
	);
}
