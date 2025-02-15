import MainLoader from "@/components/loadings/MainLoader";

export default function Loading() {
  return (
    <div className="flex-grow flex justify-center items-center">
      <MainLoader />
    </div>
  );
}
