export function Button({
  type = "submit",
  classes,
  title = "submit",
  loading = false,
}) {
  return (
    <>
      <button type={type} disabled={loading ? true : false} className={classes}>
        {loading ? "Submitting..." : title}
      </button>
    </>
  );
}
