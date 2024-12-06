interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

function Container({ className="",children }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1170px] mx-auto px-1 sm:px-4 ${className}`}>{children}</div>
  );
}

export default Container;