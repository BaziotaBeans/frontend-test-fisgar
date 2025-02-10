import { Skeleton, Card, Box } from "@mui/material";

export function SkeletonPropertyList() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} sx={{ padding: "10px" }}>
          <Skeleton variant="rectangular" height={200} />
          <Box sx={{ mt: 2 }}>
            <Skeleton width="60%" />
            <Skeleton width="80%" />
            <Skeleton width="40%" />
          </Box>
        </Card>
      ))}
    </>
  );
}
