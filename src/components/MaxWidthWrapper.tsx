import { Container, ContainerProps } from "@mui/material";

interface MaxWidthWrapperProps extends ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children, ...props }: MaxWidthWrapperProps) => {
  return (
    <Container
      maxWidth="lg"
      className={className}
      sx={{ height: "100%", px: { xs: 4, md: 20 } }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default MaxWidthWrapper;
