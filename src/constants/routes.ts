type RouteItemType = {
    readonly name: string;
    readonly path: string;
    readonly hideOnNav?: boolean;
};

type TopLvlRoutesType = {
    readonly [key in "main" | "components" | "contacts"]: RouteItemType;
};

export const topLvlRoutes: TopLvlRoutesType = {
    main: {
        name: "Главная",
        path: "/",
        hideOnNav: true,
    },
    components: {
        name: "Компоненты",
        path: "/components",
    },
    contacts: {
        name: "Контакты",
        path: "/#contacts",
    },
} as const;
