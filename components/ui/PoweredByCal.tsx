import Link from "next/link";

import { useLocale } from "@lib/hooks/useLocale";

const PoweredByCal = () => {
  const { t } = useLocale();
  return (
    <div className="p-1 text-xs text-center sm:text-right">
      <Link href={`https://cal.com?utm_source=embed&utm_medium=powered-by-button`}>
        <a target="_blank" className="text-gray-500 opacity-50 dark:text-white hover:opacity-100">
          {t("powered_by")}{" "}
          <img
            className="dark:hidden w-auto inline h-[10px] relative -mt-px"
            src="https://res.cloudinary.com/g-draf-inc/image/upload/v1590265880/logo_mduxbk.png"
            alt="Glab Tech Services Logo"
          />
          <img
            className="hidden dark:inline w-auto h-[10px] relativ -mt-px"
            src="https://res.cloudinary.com/g-draf-inc/image/upload/v1590265692/logo_qjmnz1.jpg"
            alt="Glab Tech Services Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;
