export const Footer = (props) => {
  const { year, fullname, studentId } = props;
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        {"copyright © "}
        {year}
        {fullname}
        {studentId}
      </p>
    </div>
  );
};
