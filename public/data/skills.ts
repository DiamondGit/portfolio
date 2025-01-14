export type SkillType = {
    name: string;
    color: string;
    textColor: string;
};

type SkillsGroupType = {
    name: string;
    skills: SkillType[];
};

const skills: SkillsGroupType[] = [
    {
        name: "Base Technologies",
        skills: [
            { name: "HTML", color: "#E44D26", textColor: "#FFFFFF" },
            { name: "CSS3", color: "#1572B6", textColor: "#FFFFFF" },
            { name: "JavaScript", color: "#F7DF1E", textColor: "#000000" },
        ],
    },
    {
        name: "Main Frameworks and Libraries",
        skills: [
            { name: "React", color: "#61DAFB", textColor: "#000000" },
            { name: "Next.js", color: "#000000", textColor: "#FFFFFF" },
            { name: "TypeScript", color: "#3178C6", textColor: "#FFFFFF" },
        ],
    },
    {
        name: "Software Tools",
        skills: [
            { name: "VSCode", color: "#007ACC", textColor: "#FFFFFF" },
            { name: "Figma", color: "#F24E1E", textColor: "#FFFFFF" },
            { name: "Adobe Photoshop", color: "#31A8FF", textColor: "#FFFFFF" },
        ],
    },
    {
        name: "Other Technologies and Tools",
        skills: [
            { name: "GitHub", color: "#181717", textColor: "#FFFFFF" },
            { name: "SASS", color: "#CC6699", textColor: "#FFFFFF" },
            { name: "Material UI", color: "#0081CB", textColor: "#FFFFFF" },
            { name: "Ant Design", color: "#0170FE", textColor: "#FFFFFF" },
        ],
    },
];

export default skills;
