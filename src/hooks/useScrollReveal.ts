import { useEffect, useState, useRef, type RefObject } from 'react';

export function useScrollReveal(threshold = 0.1): [RefObject<any>, boolean] {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<any>(null);

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(currentRef);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold]);

    return [domRef, isVisible];
}