import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/strpe-js';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    // criação da checkout session
    try {
      const response = await api.post('subscribe')

      const { sessionId } = response.data
      const stripeJs = await getStripeJs()

      await stripeJs.redirectToCheckout({ sessionId })
    } catch (e) {
      console.error({ e })
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}