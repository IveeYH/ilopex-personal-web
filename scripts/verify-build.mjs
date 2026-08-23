import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const pages = [
  {
    file: "dist/index.html",
    lang: "es",
    canonical: "https://ilopex.com/",
    content: "Experiencia profesional",
  },
  {
    file: "dist/en/index.html",
    lang: "en",
    canonical: "https://ilopex.com/en/",
    content: "Professional experience",
  },
  {
    file: "dist/ca/index.html",
    lang: "ca",
    canonical: "https://ilopex.com/ca/",
    content: "Experiència professional",
  },
];

for (const page of pages) {
  const html = await readFile(page.file, "utf8");

  assert.match(html, new RegExp(`<html lang="${page.lang}"`));
  assert.ok(
    html.includes(page.content),
    `${page.file} is missing translated content`,
  );
  assert.ok(
    html.includes(`rel="canonical" href="${page.canonical}"`),
    `${page.file} has an unexpected canonical URL`,
  );
  assert.ok(
    html.includes("Data Architecture &amp; Strategy"),
    `${page.file} is missing the footer specialty`,
  );

  for (const experienceId of ["astrazeneca", "iag"]) {
    assert.ok(
      html.includes(`href="#experience-${experienceId}"`),
      `${page.file} is missing the ${experienceId} context link`,
    );
    assert.ok(
      html.includes(`id="experience-${experienceId}"`),
      `${page.file} is missing the ${experienceId} experience target`,
    );
  }

  for (const alternate of ["es", "en", "ca", "x-default"]) {
    assert.ok(
      html.includes(`hreflang="${alternate}"`),
      `${page.file} is missing hreflang ${alternate}`,
    );
  }
}

await Promise.all([access("dist/robots.txt"), access("dist/sitemap.xml")]);

console.log(`Verified ${pages.length} localized static pages.`);
