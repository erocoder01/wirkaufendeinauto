export const scrollToWithOffset = (ref, offset = -50) => {
  const elementPosition =
    ref.current.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
