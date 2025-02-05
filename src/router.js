let routes;

window.addEventListener('popstate', () => {
    routes[location.pathname]?.();
});

const goto = (url, { push } = {}) => {
    if (push) {
        history.pushState({}, '', url);
    }

    const [pathname, queries] = url.split('?');

    const searchParams = Object.fromEntries(new URLSearchParams(queries));

    routes[pathname]?.({ searchParams });
};

const start = (params) => {
    routes = params.routes;
    goto(`${location.pathname}${location.search}`);
};

export default start;
export { goto };