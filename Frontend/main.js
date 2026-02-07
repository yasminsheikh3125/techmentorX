console.log("✅ main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  applyConfig(defaultConfig);
});

function applyConfig(cfg) {
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const featuresHeading = document.getElementById("features-heading");
  const howItWorksHeading = document.getElementById("how-it-works-heading");
  const ctaButton = document.getElementById("cta-button");

  if (heroTitle) heroTitle.textContent = cfg.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = cfg.hero_subtitle;
  if (featuresHeading) featuresHeading.textContent = cfg.features_heading;
  if (howItWorksHeading) howItWorksHeading.textContent = cfg.how_it_works_heading;
  if (ctaButton) ctaButton.textContent = cfg.cta_button_text;

  document.querySelectorAll(".btn-primary").forEach(btn => {
    btn.style.background = `linear-gradient(135deg, ${cfg.primary_action_color}, ${cfg.secondary_action_color})`;
  });
}
