//~ NEW DATE (Format)
const today = new Date();

const day = today.toLocaleString("fr-FR", { day: "numeric" });
const month = today.toLocaleString("fr-FR", { month: "long" });
const year = today.toLocaleString("fr-FR", { year: "numeric" });

const formattedDate = [year, month, day].join("-");

export { formattedDate };
