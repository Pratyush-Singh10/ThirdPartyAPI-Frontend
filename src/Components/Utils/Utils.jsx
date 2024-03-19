export const SetToken = (item, itemVal) => {
    localStorage.setItem(item, itemVal)
}

export const GetToken = (item) => {
    return localStorage.getItem(item)
}

export const RemoveToken = (item) => {
    localStorage.removeItem(item);
}

export  const ScrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}