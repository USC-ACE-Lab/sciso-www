import React from "react";

interface StackProps {
  children: React.ReactNode;
  gap?: string;
  orient?: "horizontal" | "vertical";
  align?: "start" | "center" | "end";
  style?: React.CSSProperties;
  [key: string]: any;
}

const getStackStyles = (
  orient: "horizontal" | "vertical",
  gap: string,
  align: "start" | "center" | "end",
  style: React.CSSProperties = {}
): React.CSSProperties => ({
  display: "flex",
  flexDirection: orient === "horizontal" ? "row" : "column",
  gap: gap,
  alignItems: align,
  ...style,
});

const Stack: React.FC<StackProps> = ({
  children,
  gap = "1rem",
  orient = "vertical",
  align = "center",
  ...props
}) => {
  return (
    <div style={getStackStyles(orient, gap, align)} {...props}>
      {children}
    </div>
  );
};

export default Stack;
