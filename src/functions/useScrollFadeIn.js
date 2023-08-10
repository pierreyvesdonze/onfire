import { useEffect, useState } from 'react';

const useScrollFadeIn = () => {
    const [visibleSections, setVisibleSections] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fadeIn');

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0 && !visibleSections.includes(section)) {
                    section.classList.add('active');
                    setVisibleSections(prevVisibleSections => [...prevVisibleSections, section]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleSections]);
};

export default useScrollFadeIn;