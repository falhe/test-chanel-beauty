import { useState } from 'react';
import { Menu } from './components/Menu';
import { type STEP_LINKS, type Link, type Links } from '@/types';
import menu from '@/menu.json';

const App = () => {
  const [step, setStep] = useState(1);
  const [previousLinks, setPreviousLinks] = useState<STEP_LINKS[]>([]);
  const [currentLinks, setCurrentLinks] = useState(menu as Links);

  const handlePreviousArrowClick = () => {
    const previousStep = step - 1;
    const precedentLinks = previousLinks.find(
      (prev) => prev.step === previousStep,
    );
    if (precedentLinks) {
      setStep(previousStep);
      setCurrentLinks(precedentLinks.links);
    }
  };

  const onClick = (link: Link) => {
    setStep((step) => step + 1);
    setPreviousLinks((previousLinks) => [
      ...previousLinks,
      {
        step,
        links: currentLinks,
      },
    ]);
    link.submenu && setCurrentLinks(link.submenu);
  };

  return (
    <Menu
      {...{
        currentLinks,
        step,
        handlePreviousArrowClick,
        onClick,
      }}
    />
  );
};

export default App;
