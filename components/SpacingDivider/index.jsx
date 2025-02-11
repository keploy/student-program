const SpaceDivider = ({ height = "6rem", className = "" }) => {
  return (
    <>
      <section id="space_divider">
        <div
          className={`responsive-container ${className}`}
          style={{ height }}
        ></div>
      </section>
    </>
  );
};

export default SpaceDivider;
