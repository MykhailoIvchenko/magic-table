import { tableService } from '@/services/tableService';
import { useEffect } from 'react';

function usePageLeaveConfirmation() {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.href && anchor.target !== '_blank') {
        const isInternal = anchor.href.startsWith(window.location.origin);
        if (isInternal) {
          const confirmed = confirm(
            'Are you shure you want to leave the page? The table data would be lost'
          );
          if (!confirmed) {
            e.preventDefault();
            e.stopImmediatePropagation();
          } else {
            tableService.clearAllData();
          }
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);
}

export default usePageLeaveConfirmation;
