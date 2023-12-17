export default function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
}
