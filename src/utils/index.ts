export const formatPrice = (price: number): string => {
    return `${price.toLocaleString("ru-RU")} ₸ / час`;
}

export const formatDate = (date: number | Date): string => {
    const d = new Date(date);
    return d.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })
}