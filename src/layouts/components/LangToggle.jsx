import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '../../components/ui/button';

const LanguageSwitcher = () => {
  // const { i18n } = useTranslation();
  // const currentLanguage = i18n.language || localStorage.getItem('i18nextLng') || 'en';

  // const changeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  //   localStorage.setItem('i18nextLng', lang);
  // };

  const languageMap = {
    en: 'English',
    fr: 'Français',
    tg: 'Tagalog',
    kr: '한국어',
    hn: 'हिंदी',
  };

  return (
    <div className="relative px-2 w-full rounded">
      <div className="flex items-center gap-2 pb-2 border-b">
        <Globe className="w-4 h-4" />
        <span className="text-sm">Select Language</span>
      </div>
      <div className="flex flex-col gap-1 pt-2">
        {/* {Object.entries(languageMap).map(([key, label]) => (
         <Button
             key={key}
            size={'small'}
            onClick={(e) => {
              e.stopPropagation();
              changeLanguage(key);
            }}
            className={`text-sm py-1
              ${key === currentLanguage ? 'bg-brand hover:bg-brand-hover' : ''}
            `}>
            {label}
          </Button>
        ))} */}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
