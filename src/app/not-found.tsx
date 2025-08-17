export default function NotFound() {
  return (
    <div className="custom-iamgeBackground">
      <h1 className="font-heading font-bold text-8xl md:text-9xl uppercase tracking-wide p-8 md:p-16 text-white">
        Page Not Found
      </h1>
      <p className="font-body text-xl pl-8 pb-8 md:pl-16 md:pb-16 text-white">
        Think there should be a page here? Please reach out to{" "}
        <a
          className="underline text-yellow"
          href="mailto:it@kingcountyequitynow.com"
        >
          it@kingcountyequitynow.com
        </a>{" "}
        and we will get back to you
      </p>
    </div>
  );
}
