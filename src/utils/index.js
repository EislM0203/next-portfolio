import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { get } from "http";

const experiencesDir = path.join(process.cwd(), "src", "content", "experience");
const educationDir = path.join(process.cwd(), "src", "content", "education");
const projectsDir = path.join(process.cwd(), "src", "content", "projects");

export async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getEducationNames() {
  const names = fs.readdirSync(educationDir);
  return names;
}

function getExperienceNames() {
  const names = fs.readdirSync(experiencesDir);
  return names;
}

function getProjectNames() {
  const names = fs.readdirSync(projectsDir);
  return names;
}

export function getExperiences() {
  const experienceNames = getExperienceNames();

  const experiences = experienceNames.map((name) => {
    const filePath = path.join(experiencesDir, name);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContent);
    data.slug = name.replace(/\.md$/, "");

    return { ...data, content };
  });

  return experiences;
}

export function getEducations() {
  const educationNames = getEducationNames();

  const educations = educationNames.map((name) => {
    const filePath = path.join(educationDir, name);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContent);
    data.slug = name.replace(/\.md$/, "");
    return { ...data, content };
  });

  return educations;
}

export function getProjects() {
  const projectNames = getProjectNames();

  const projects = projectNames.map((name) => {
    const filePath = path.join(projectsDir, name);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContent);
    data.slug = name.replace(/\.md$/, "");
    return { ...data, content };
  });

  return projects;
}

async function markdownToHtml(content) {
  const result = await remark().use(remarkHtml).use(remarkGfm).process(content);

  return result.toString();
}

export async function getProjectsBySlug(slug) {
  const fileName = slug + ".md";
  const filePath = path.join(projectsDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  data.slug = slug;

  const htmlContent = await markdownToHtml(content);
  return { ...data, content: htmlContent };
}

export async function getExperienceBySlug(slug) {
  const fileName = slug + ".md";
  const filePath = path.join(experiencesDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  data.slug = slug;

  const htmlContent = await markdownToHtml(content);
  return { ...data, content: htmlContent };
}

export async function getEducationBySlug(slug) {
  const fileName = slug + ".md";
  const filePath = path.join(educationDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  data.slug = slug;
  const htmlContent = await markdownToHtml(content);
  return { ...data, content: htmlContent };
}

export function getContentCount() {
  return {
    experiences: getExperienceNames().length,
    educations: getEducationNames().length,
    projects: getProjectNames().length,
  };
}
