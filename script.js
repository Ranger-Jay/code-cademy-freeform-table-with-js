// Sparkle Trail Effect with Emoji
document.addEventListener("mousemove", function(e) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.textContent = "✨"; // Using the sparkle emoji
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});