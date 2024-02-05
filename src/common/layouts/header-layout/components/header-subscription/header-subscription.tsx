import { useState } from 'react';

import { CommonPurchaseModal } from '@/common/components/common-purchase-modal';

import styles from './header-subscription.module.css';

export const HeaderSubscription = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handlePurchaseModalOpen = () => {
    setIsPurchaseModalOpen(true);
  };

  const handlePurchaseModalClose = () => {
    setIsPurchaseModalOpen(false);
  };

  return (
    <>
      <button className={styles.button} onClick={handlePurchaseModalOpen}>
        <img alt="Подписка" className={styles.icon} src="/flash.svg" />
      </button>
      <CommonPurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={handlePurchaseModalClose}
      />
    </>
  );
};
