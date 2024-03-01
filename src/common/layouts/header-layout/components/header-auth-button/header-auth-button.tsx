import { useState } from 'react';
import { CommonAuthModal } from '@/common/components/common-auth-modal/common-auth-modal';
import { CommonButton } from '@/common/components/common-button';

export const HeaderAuthButton = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handlePurchaseModalOpen = () => {
    setIsPurchaseModalOpen(true);
  };

  const handlePurchaseModalClose = () => {
    setIsPurchaseModalOpen(false);
  };

  return (
    <>
      {/* <button className={styles.button} onClick={handlePurchaseModalOpen}>
        <img alt="Подписка" className={styles.icon} src="/flash.svg" />
      </button> */}
      <CommonButton onClick={handlePurchaseModalOpen}>Войти</CommonButton>
      <CommonAuthModal
        isOpen={isPurchaseModalOpen}
        onClose={handlePurchaseModalClose}
      />
    </>
  );
};
