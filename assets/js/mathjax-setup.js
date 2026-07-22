window.MathJax = {
  tex: {
    tags: "ams",
    // "$" is intentionally NOT an inline-math delimiter: this site writes dollar
    // amounts (e.g. $250 million) in abstracts, which would otherwise be parsed
    // as math. Use \( ... \) for inline math.
    inlineMath: [["\\(", "\\)"]],
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
