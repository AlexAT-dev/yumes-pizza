import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Про Yumes Pizza — доставка їжі у Чернівцях | Піца, суші, бургери",
  description:
    "Yumes Pizza — сервіс доставки їжі у Чернівцях. Готуємо піцу, суші та бургери зі свіжих інгредієнтів. Швидка доставка, зручне замовлення та гарантія якості.",
  keywords: [
    "Yumes Pizza",
    "доставка їжі Чернівці",
    "про нас Yumes",
    "доставка піци Чернівці",
    "суші Чернівці доставка",
    "бургери Чернівці",
  ],
  openGraph: {
    title: "Yumes Pizza — доставка їжі у Чернівцях",
    description:
      "Сервіс доставки піци, суші та бургерів у Чернівцях. Свіжі інгредієнти та швидка доставка.",
    type: "website",
  },
  alternates: {
    canonical: 'https://yumes-pizza.pp.ua/about',
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* JSON-LD EEAT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Yumes Pizza",
            url: "https://yumes-pizza.pp.ua/about",
            servesCuisine: ["Pizza", "Sushi", "Burgers"],
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Чернівці",
              addressCountry: "UA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 48.292437,
              longitude: 25.932720,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "10:00",
                closes: "22:00",
              },
            ],
            sameAs: [
              "https://instagram.com/",
              "https://facebook.com/",
            ],
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-6">Про Yumes Pizza</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Map */}
        <div className="flex flex-col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d279.0242969264974!2d25.932720474644228!3d48.29243736697043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1773951888523!5m2!1suk!2sua"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="prose max-w-none">

          <p>
            <strong>Yumes Pizza</strong> — це сервіс доставки їжі у Чернівцях, який
            спеціалізується на приготуванні піци, суші, бургерів та гарячих страв
            зі свіжих інгредієнтів. Ми працюємо для того, щоб ви могли швидко
            замовити смачну їжу додому або в офіс без зайвих очікувань.
          </p>

          <p>
            Усі страви готуються після оформлення замовлення. Це дозволяє
            зберігати свіжість продуктів та доставляти їжу гарячою. Ми
            використовуємо перевірені інгредієнти та дотримуємося стандартів
            якості на кожному етапі приготування.
          </p>

          <h2>Наша кухня</h2>

          <p>
            Меню Yumes Pizza включає популярні страви, які користуються попитом
            серед клієнтів у Чернівцях. Ми пропонуємо класичні та авторські піци,
            суші сети, бургери, закуски та напої.
          </p>

          <p>
            Команда кухарів має досвід приготування різних кухонь. Кожне
            замовлення готується індивідуально без використання заготовок, що
            гарантує свіжість та якість кожної страви.
          </p>

          <h2>Чому обирають Yumes Pizza</h2>

          <ul>
            <li>Свіжі інгредієнти від перевірених постачальників</li>
            <li>Швидка доставка по Чернівцях</li>
            <li>Великий вибір страв: піца, суші, бургери</li>
            <li>Приготування після оформлення замовлення</li>
            <li>Зручне онлайн-замовлення</li>
            <li>Прозорі ціни без прихованих платежів</li>
          </ul>

          <h2>Зона доставки</h2>

          <p>
            Ми доставляємо їжу по всіх районах Чернівців. Час доставки залежить
            від завантаження кухні та відстані до адреси доставки.
          </p>

          <ul>
            <li>Центр</li>
            <li>Гравітон</li>
            <li>Роша</li>
            <li>Проспект</li>
            <li>Калинка</li>
          </ul>

          <h2>Гарантія якості</h2>

          <p>
            Ми відповідально ставимося до кожного замовлення. Якщо виникають
            питання щодо якості або доставки — наша команда допоможе швидко
            вирішити ситуацію.
          </p>

          <p>
            Ваші відгуки допомагають нам покращувати сервіс та робити доставку ще
            зручнішою.
          </p>

          <h2>Контакти</h2>

          <ul>
            <li>
              <strong>Місто:</strong> Чернівці
            </li>
            <li>
              <strong>Графік роботи:</strong> 10:00 — 22:00
            </li>
            <li>
              <strong>Тип сервісу:</strong> доставка їжі
            </li>
            <li>
              <strong>Кухня:</strong> піца, суші, бургери
            </li>
          </ul>

          <p>
            Дякуємо, що обираєте <strong>Yumes Pizza</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}