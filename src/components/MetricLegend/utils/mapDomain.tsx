import { Domain } from "../../../hierarchy-metric-client";
import { LargeBadge } from "../../LargeBadge/LargeBadge";

export const mapDomain = (domain: Domain) => {
	if (!domain.id || !domain.color || !domain.name) return null;
	return (
		<LargeBadge
			key={domain.id}
			backgroundColor={`#${domain.color}`}
			className="w-7rem px-1 py-2"
		>
			{domain.name}
		</LargeBadge>
	);
};
