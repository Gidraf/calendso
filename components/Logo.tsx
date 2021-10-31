export default function Logo({ small }: { small?: boolean }) {
  return (
    <h1 className="inline brand-logo">
      <strong>
        <img
          className={small ? "h-4 w-auto" : "h-5 w-auto"}
          alt="Cal"
          title="Cal"
          src="https://res.cloudinary.com/g-draf-inc/image/upload/v1590265880/logo_mduxbk.png"
        />
      </strong>
    </h1>
  );
}
