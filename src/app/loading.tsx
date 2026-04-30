export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <div
        className="h-[3px] animate-loading-bar"
        style={{
          background: "linear-gradient(90deg, #d66501, #855dda)",
          transformOrigin: "left center",
        }}
      />
    </div>
  )
}
