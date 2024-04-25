export const getGitLink = (metaUrl: string) => {
    const currentScriptUrl = new URL(metaUrl);
    const fullPath = currentScriptUrl.pathname;
    const srcIndex = fullPath.lastIndexOf("/src/");
    const relativePath = fullPath.slice(srcIndex);
    return `https://github.com/DiamondGit/portfolio/blob/master${relativePath}`;
};
