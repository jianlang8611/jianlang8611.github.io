const copyButton = document.querySelector("[data-copy-target]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const target = document.querySelector(copyButton.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      const original = copyButton.textContent;
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = original;
      }, 1400);
    } catch {
      copyButton.textContent = "Copy failed";
      setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1400);
    }
  });
}
