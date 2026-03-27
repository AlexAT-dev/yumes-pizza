import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Доставка Yumes Pizza — умови доставки та оплати у Чернівцях",
  description:
    "Умови доставки Yumes Pizza у Чернівцях. Час доставки, зона обслуговування, мінімальне замовлення та способи оплати.",
  keywords: [
    "доставка Yumes Pizza",
    "доставка їжі Чернівці",
    "оплата Yumes Pizza",
    "доставка піци Чернівці",
    "умови доставки Чернівці",
  ],
  openGraph: {
    title: "Доставка Yumes Pizza у Чернівцях",
    description:
      "Дізнайтеся умови доставки, час та способи оплати Yumes Pizza у Чернівцях.",
    type: "website",
  },
}

export default function DeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* EEAT JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FoodDeliveryService",
              name: "Yumes Pizza",
              areaServed: {
                "@type": "City",
                name: "Чернівці",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Delivery",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Стандартна доставка",
                    price: "0",
                    priceCurrency: "UAH",
                  },
                ],
              },
              paymentAccepted: ["Cash", "Credit Card"],
              priceRange: "$$",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Який час доставки Yumes Pizza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Середній час доставки становить 30-60 хвилин залежно від відстані та завантаженості кухні.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Яка мінімальна сума замовлення?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Мінімальна сума замовлення для доставки становить 150 гривень.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Чи є безкоштовна доставка?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Безкоштовна доставка доступна при замовленні від 500 гривень.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Які способи оплати доступні?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Оплата доступна готівкою кур'єру, банківською карткою або онлайн на сайті.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <h1 className="text-3xl font-bold mb-6">Доставка та оплата</h1>

      <div className="prose max-w-none">
        <p>
          <strong>Yumes Pizza</strong> пропонує швидку доставку їжі у Чернівцях.
          Ми готуємо замовлення після оформлення та доставляємо гарячими
          безпосередньо до вашої адреси.
        </p>

        <h2>Умови доставки</h2>

        <ul>
          <li>
            <strong>Зона доставки:</strong> місто Чернівці та прилеглі райони
          </li>
          <li>
            <strong>Час доставки:</strong> 30–60 хвилин залежно від відстані
          </li>
          <li>
            <strong>Мінімальне замовлення:</strong> 150 грн
          </li>
          <li>
            <strong>Безкоштовна доставка:</strong> від 500 грн
          </li>
          <li>
            <strong>Графік доставки:</strong> щодня з 10:00 до 22:00
          </li>
        </ul>

        <h2>Зона обслуговування</h2>

        <p>
          Ми доставляємо замовлення по всіх районах Чернівців. Час доставки може
          змінюватися залежно від відстані та завантаженості кухні.
        </p>

        <ul>
          <li>Центр</li>
          <li>Гравітон</li>
          <li>Роша</li>
          <li>Проспект</li>
          <li>Калинка</li>
        </ul>

        <h2>Способи оплати</h2>

        <ul>
          <li>Готівкою кур'єру при отриманні</li>
          <li>Оплата банківською карткою</li>
          <li>Онлайн оплата на сайті</li>
        </ul>

        <h2>Гарантія сервісу</h2>

        <p>
          Якщо виникають питання щодо доставки або оплати, наша служба підтримки
          допоможе вирішити ситуацію. Ми прагнемо забезпечити швидкий та
          зручний сервіс доставки для кожного замовлення.
        </p>

        <h2>Контакти</h2>

        <ul>
          <li>
            <strong>Сервіс:</strong> Yumes Pizza
          </li>
          <li>
            <strong>Місто:</strong> Чернівці
          </li>
          <li>
            <strong>Графік роботи:</strong> 10:00 — 22:00
          </li>
          <li>
            <strong>Тип:</strong> доставка їжі
          </li>
        </ul>

        <p>
          Дякуємо, що обираєте <strong>Yumes Pizza</strong>.
        </p>
      </div>
    </div>
  )
}