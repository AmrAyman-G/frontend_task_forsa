export default function formatDate(inputDate, language) {
  const date = new Date(inputDate);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  const arabicDate = new Date(inputDate).toLocaleDateString("ar-EG", options);
  return language === "ar" ? arabicDate : formattedDate;
}
