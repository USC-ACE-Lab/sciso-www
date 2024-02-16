import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import React from "react";

interface IconProps {
    icon: IconDefinition;
    size?: "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "5x" | "7x" | "10x";
}

const Icon: React.FC<IconProps> = ({ icon, size = "xs" }) => {
    return <FontAwesomeIcon icon={icon} size={size} />;
}
export default Icon;